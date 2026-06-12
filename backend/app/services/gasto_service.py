from app.core.base_service import BaseService
from app.models import ViagemModel
from app.models.gasto_model import GastoModel
from app.repository.gasto_repository import GastoRepository
from app.schemas.gasto_schema import GastoSchema


class GastoService(BaseService):

    def __init__(self, repository: GastoRepository):
        super().__init__(repository, GastoModel, GastoSchema)

    def list_gastos_by_viagem(self, viagem: ViagemModel):
        return self.repository.get_all(filtros={"viagem_id": viagem.id})
