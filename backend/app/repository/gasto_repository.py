from app.core.base_repository import BaseRepository
from app.models.gasto_model import GastoModel


class GastoRepository(BaseRepository):
    def __init__(self, session):
        super().__init__(session, GastoModel)
