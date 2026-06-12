from typing import Optional, Any

from sqlalchemy import select, Select
from sqlalchemy.orm import Session


class BaseRepository:

    def __init__(self, session: Session, model):
        self.session = session
        self.model = model

    def create(self, data):
        if hasattr(data, "model_dump"):
            data = data.model_dump()

        obj = self.model(**data)

        self.session.add(obj)
        self.session.commit()
        self.session.refresh(obj)

        return obj

    def get_all(self, filtros: Optional[dict[str, Any]] = None, options: Optional[list] = None):

        stmt = select(self.model)

        if options:
            for opt in options:
                stmt = stmt.options(opt)

        if filtros:
            # VERIFICA SE TEM ORDENACAO
            order_by = filtros.get("order")
            if order_by:
                stmt = self.processa_order(stmt, str(order_by))

            # VERIFICA SE TEM LIMIT
            limit = filtros.get("limit")
            if limit:
                stmt = stmt.limit(int(str(limit)))

            # VERIFICA SE TEM LIMIT
            stmt = self.processa_filtro(stmt, filtros)

            stmt = stmt.distinct()

        result = self.session.execute(stmt)
        return result.scalars().all()

    def processa_filtro(self, stmt: Select, filtros: dict[str, str]) -> Select:

        if filtros:
            for i in filtros.items():
                chave, valor = i
                if hasattr(self.model, chave):
                    stmt = stmt.where(getattr(self.model, chave) == valor)

        return stmt

    def processa_order(self, stmt: Select, order_by: str) -> Select:

        order = order_by.split()

        if hasattr(self.model, order[0]):
            if order[1] == 'asc':
                stmt = stmt.order_by(getattr(self.model, order[0]).asc())
            elif order[1] == 'desc':
                stmt = stmt.order_by(getattr(self.model, order[0]).desc())

        return stmt

    def get_by_id(self, obj_id: int, options: Optional[list] = None):

        stmt = select(self.model).where(self.model.id == obj_id)

        if options:
            for opt in options:
                stmt = stmt.options(opt)

        result = self.session.execute(stmt)

        return result.scalars().first()

    def update(self, obj_id: int, data):
        if hasattr(data, "model_dump"):
            data = data.model_dump()

        obj = self.get_by_id(obj_id)

        if not obj:
            return None

        for key, value in data.items():
            setattr(obj, key, value)

        self.session.commit()
        self.session.refresh(obj)

        return obj

    def delete(self, obj_id: int):
        obj = self.get_by_id(obj_id)

        if not obj:
            return False

        self.session.delete(obj)
        self.session.commit()

        return True
