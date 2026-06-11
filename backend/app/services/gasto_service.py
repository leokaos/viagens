from app.core.exceptions import EntityNotFoundError
from app.models import ViagemModel
from app.repository.gasto_repository import GastoRepository
from app.schemas.gasto_schema import GastoSchema


class GastoService:
    def __init__(self, repository: GastoRepository):
        self.repository = repository

    def create_gasto(self, gasto: GastoSchema) -> GastoSchema:
        db_gasto = self.repository.create(gasto.model_dump())
        return GastoSchema.model_validate(db_gasto)

    def list_gastos(self) -> list[GastoSchema]:
        db_gastos = self.repository.get_all()
        return [GastoSchema.model_validate(d) for d in db_gastos]

    def get_gasto(self, gasto_id: int) -> GastoSchema:
        db_gasto = self.repository.get_by_id(gasto_id)
        if not db_gasto:
            raise EntityNotFoundError("Gasto", gasto_id)
        return GastoSchema.model_validate(db_gasto)

    def update_gasto(self, gasto_id: int, updated_gasto: GastoSchema) -> GastoSchema:
        db_gasto = self.repository.update(gasto_id, updated_gasto.model_dump())
        if not db_gasto:
            raise EntityNotFoundError("Gasto", gasto_id)
        return GastoSchema.model_validate(db_gasto)

    def delete_gasto(self, gasto_id: int) -> None:
        if not self.repository.delete(gasto_id):
            raise EntityNotFoundError("Gasto", gasto_id)

    def list_gastos_by_viagem(self, viagem: ViagemModel):
        return self.repository.get_all(filtros={"viagem_id": viagem.id})
