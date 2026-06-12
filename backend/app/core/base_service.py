from typing import Optional, Any

from app.core.base_repository import BaseRepository
from app.core.exceptions import EntityNotFoundError


class BaseService:

    def __init__(self, repository: BaseRepository, model, schema):
        self.repository = repository
        self.model = model
        self.schema = schema

    def get_by_id(self, obj_id: int, options: Optional[list] = None):
        db_obj = self.repository.get_by_id(obj_id, options=options)

        if not db_obj:
            raise EntityNotFoundError(self.repository.model.__name__, obj_id)

        return self.schema.model_validate(db_obj)

    def list_all(self, filtros: Optional[dict[str, Any]] = None, options: Optional[list] = None):
        db_objs = self.repository.get_all(filtros=filtros, options=options)

        return [self.schema.model_validate(obj) for obj in db_objs]

    def create(self, destino):
        db_obj = self.repository.create(destino.model_dump())

        return self.schema.model_validate(db_obj)

    def update(self, entity_id, entity):
        db_obj = self.repository.update(entity_id, entity.model_dump())

        if not db_obj:
            raise EntityNotFoundError(self.repository.model.__name__, entity_id)

        return self.schema.model_validate(db_obj)

    def delete(self, entity_id: int) -> None:
        if not self.repository.delete(entity_id):
            raise EntityNotFoundError(self.repository.model.__name__, entity_id)
