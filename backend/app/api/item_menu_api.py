from fastapi import APIRouter, Depends, Request

from app.core import base_api
from app.core.postgres import get_session
from app.repository.item_menu_repository import ItemMenuRepository
from app.schemas.item_menu_schema import ItemMenuSchema
from app.services.item_menu_service import ItemMenuService

router = APIRouter(prefix="/menu", tags=["menu"])


def get_service(session=Depends(get_session)):
    repo = ItemMenuRepository(session)
    return ItemMenuService(repo)


@router.get("/", response_model=list[ItemMenuSchema])
def list_item_menu(request: Request, service: ItemMenuService = Depends(get_service)):
    return base_api.list_all(request, service)


@router.get("/{item_menu_id}", response_model=ItemMenuSchema)
def get_item_menu_by_id(item_menu_id: int, service: ItemMenuService = Depends(get_service)):
    return base_api.get_by_id(item_menu_id, service)


@router.post("/", status_code=201, response_model=ItemMenuSchema)
def create_item_menu(item_menu: ItemMenuSchema, service: ItemMenuService = Depends(get_service)):
    return base_api.create(item_menu, service)


@router.put("/{item_menu_id}", response_model=ItemMenuSchema)
def update_item_menu(item_menu_id: int, item_menu: ItemMenuSchema, service: ItemMenuService = Depends(get_service)):
    return base_api.update(item_menu_id, item_menu, service)


@router.delete("/{item_menu_id}", status_code=204)
def delete_item_menu(item_menu_id: int, service: ItemMenuService = Depends(get_service)):
    base_api.delete(item_menu_id, service)
