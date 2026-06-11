from app.core.base_repository import BaseRepository
from app.models.viagem_model import ViagemModel


class ViagemRepository(BaseRepository):
    def __init__(self, session):
        super().__init__(session, ViagemModel)

    def processa_filtro(self, stmt, filtros):
        data_inicio = filtros.get("data_inicio")
        if data_inicio:
            stmt = stmt.where(self.model.data_inicio >= data_inicio)

        return stmt
