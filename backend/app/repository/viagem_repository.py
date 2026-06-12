from sqlalchemy import Select

from app.core.base_repository import BaseRepository
from app.models.viagem_model import ViagemModel


class ViagemRepository(BaseRepository):
    def __init__(self, session):
        super().__init__(session, ViagemModel)

    def processa_filtro(self, stmt, filtros):

        data_inicio = filtros.get("data_inicio")
        if data_inicio:
            stmt = stmt.where(self.model.data_inicio >= data_inicio)

        destino = filtros.get("destino")
        if destino:
            stmt = stmt.where(self.model.descricao.ilike(f"%{destino}%"))

        return stmt

    def processa_order(self, stmt: Select, order_by: str):

        campo, direcao = order_by.split()

        coluna = None

        if campo == 'destino':
            coluna = ViagemModel.descricao

        if campo == 'inicio':
            coluna = ViagemModel.data_inicio

        if coluna is not None:
            if direcao == 'asc':
                stmt = stmt.order_by(coluna.asc())
            else:
                stmt = stmt.order_by(coluna.desc())

        return stmt
