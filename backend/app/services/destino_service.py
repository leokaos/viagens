from app.core.exceptions import EntityNotFoundError
from app.models.destino_model import DestinoModel
from app.repository.destino_repository import DestinoRepository
from app.schemas.destino_schema import DestinoSchema
from sqlalchemy.orm import selectinload


class DestinoService:
    def __init__(self, repository: DestinoRepository):
        self.repository = repository

    def create_destino(self, destino: DestinoSchema) -> DestinoSchema:
        db_destino = self.repository.create(destino.model_dump())
        return DestinoSchema.model_validate(db_destino)

    def list_destinos(self) -> list[DestinoSchema]:
        db_destinos = self.repository.get_all(options=[selectinload(DestinoModel.tags)])
        return [DestinoSchema.model_validate(d) for d in db_destinos]

    def get_destino(self, destino_id: int) -> DestinoSchema:
        db_destino = self.repository.get_by_id(destino_id, options=[selectinload(DestinoModel.tags)])
        if not db_destino:
            raise EntityNotFoundError("Destino", destino_id)
        return DestinoSchema.model_validate(db_destino)

    def update_destino(self, destino_id: int, updated_destino: DestinoSchema) -> DestinoSchema:
        db_destino = self.repository.update(destino_id, updated_destino.model_dump())
        if not db_destino:
            raise EntityNotFoundError("Destino", destino_id)
        return DestinoSchema.model_validate(db_destino)

    def delete_destino(self, destino_id: int) -> None:
        if not self.repository.delete(destino_id):
            raise EntityNotFoundError("Destino", destino_id)
