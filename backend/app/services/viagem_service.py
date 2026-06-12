from app.core.base_service import BaseService
from app.models.viagem_model import ViagemModel
from app.repository.viagem_repository import ViagemRepository
from app.schemas.viagem_schema import ViagemSchema


class ViagemService(BaseService):
    def __init__(self, repository: ViagemRepository):
        super().__init__(repository, ViagemModel, ViagemSchema)
