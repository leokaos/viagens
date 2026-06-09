from app.core.base_repository import BaseRepository
from app.models.viagem_model import ViagemModel


class ViagemRepository(BaseRepository):
    def __init__(self, session):
        super().__init__(session, ViagemModel)
