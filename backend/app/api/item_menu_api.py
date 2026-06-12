from fastapi import APIRouter, Depends, HTTPException, Request

from app.core.exceptions import EntityNotFoundError
from app.core.postgres import get_session
from app.repository.item_menu_repository import ItemMenuRepository
from app.schemas.item_menu_schema import ItemMenuSchema
from app.services.item_menu_service import ItemMenuService

router = APIRouter(prefix="/menu", tags=["Menu"])


def get_service(session=Depends(get_session)):
    repository = ItemMenuRepository(session)
    return ItemMenuService(repository)


@router.get("/", response_model=list[ItemMenuSchema])
def list_destinos(request: Request, service: ItemMenuService = Depends(get_service)):
    filtros = dict(request.query_params)
    return service.list_all(filtros=filtros)


@router.get("/{item_id}", response_model=ItemMenuSchema)
def get_by_id(item_id: int, service: ItemMenuService = Depends(get_service)):
    try:
        return service.get_by_id(item_id)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
