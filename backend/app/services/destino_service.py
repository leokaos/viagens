from app.core.base_service import BaseService
from app.models.destino_model import DestinoModel
from app.repository.destino_repository import DestinoRepository
from app.schemas.destino_schema import DestinoSchema


class DestinoService(BaseService):

    def __init__(self, repository: DestinoRepository):
        super().__init__(repository, DestinoModel, DestinoSchema)
