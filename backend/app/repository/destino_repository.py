from app.core.base_repository import BaseRepository
from app.models.destino_model import DestinoModel


class DestinoRepository(BaseRepository):
    def __init__(self, session):
        super().__init__(session, DestinoModel)
