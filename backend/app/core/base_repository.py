from typing import Optional, Any

from sqlalchemy.orm import Session
from sqlalchemy import select, Select


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

            if order_by and hasattr(self.model, str(order_by)):
                stmt = stmt.order_by(getattr(self.model, str(order_by)))

            # VERIFICA SE TEM LIMIT
            limit = filtros.get("limit")
            if limit:
                stmt = stmt.limit(int(str(limit)))

            stmt = self.processa_filtro(stmt, filtros)

        result = self.session.execute(stmt)
        return result.scalars().all()

    def processa_filtro(self, stmt: Select, filtros: dict[str, str]):
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
