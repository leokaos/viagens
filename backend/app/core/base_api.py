from fastapi import HTTPException, Request

from app.core.base_service import BaseService
from app.core.exceptions import EntityNotFoundError


def list_all(request: Request, service: BaseService):
    filtros = dict(request.query_params)
    return service.list_all(filtros=filtros)


def get_by_id(entity_id: int, service: BaseService):
    try:
        return service.get_by_id(entity_id)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))


def create(entity, service: BaseService):
    return service.create(entity)


def update(entity_id, entity, service: BaseService):
    try:
        return service.update(entity_id, entity)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))


def delete(entity_id, service: BaseService):
    try:
        service.delete(entity_id)
    except EntityNotFoundError:
        raise HTTPException(status_code=404, detail="Viagem não encontrada")
