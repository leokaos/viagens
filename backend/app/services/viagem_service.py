from sqlalchemy.orm import selectinload

from app.core.exceptions import EntityNotFoundError
from app.models.viagem_model import ViagemModel
from app.repository.viagem_repository import ViagemRepository
from app.schemas.viagem_schema import ViagemSchema


class ViagemService:
    def __init__(self, repository: ViagemRepository):
        self.repository = repository

    def create_viagem(self, viagem: ViagemSchema) -> ViagemSchema:
        db_viagem = self.repository.create(viagem)
        return ViagemSchema.model_validate(db_viagem)

    def list_viagens(self, filtros: dict[str, str]) -> list[ViagemSchema]:

        db_viagens = self.repository.get_all(filtros, options=[selectinload(ViagemModel.destinos)])

        return [ViagemSchema.model_validate(v) for v in db_viagens]

    def get_viagem(self, viagem_id: int) -> ViagemSchema:
        db_viagem = self.repository.get_by_id(viagem_id, options=[selectinload(ViagemModel.destinos)])
        if not db_viagem:
            raise EntityNotFoundError("Viagem", viagem_id)
        return ViagemSchema.model_validate(db_viagem)

    def update_viagem(self, viagem_id: int, updated_viagem: ViagemSchema) -> ViagemSchema:
        db_viagem = self.repository.update(viagem_id, updated_viagem)
        if not db_viagem:
            raise EntityNotFoundError("Viagem", viagem_id)
        return ViagemSchema.model_validate(db_viagem)

    def delete_viagem(self, viagem_id: int) -> None:
        if not self.repository.delete(viagem_id):
            raise EntityNotFoundError("Viagem", viagem_id)
