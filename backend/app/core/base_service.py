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
