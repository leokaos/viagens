from fastapi import APIRouter, Depends

from app.core.postgres import get_session
from app.repository.item_menu_repository import ItemMenuRepository
from app.services.item_menu_service import ItemMenuService
from app.schemas.item_menu_schema import ItemMenuSchema

router = APIRouter(prefix="/menu", tags=["Menu"])


def get_service(session=Depends(get_session)):
    repository = ItemMenuRepository(session)
    return ItemMenuService(repository)


@router.post("/", response_model=ItemMenuSchema)
def create(item: ItemMenuSchema, service: ItemMenuService = Depends(get_service)):
    return service.create(item)


@router.get("/", response_model=list[ItemMenuSchema])
def list_all(service: ItemMenuService = Depends(get_service)):
    return service.list_all()


@router.get("/{item_id}", response_model=ItemMenuSchema)
def get_by_id(item_id: int, service: ItemMenuService = Depends(get_service)):
    return service.get_by_id(item_id)


@router.put("/{item_id}", response_model=ItemMenuSchema)
def update(item_id: int, item: ItemMenuSchema, service: ItemMenuService = Depends(get_service)):
    return service.update(item_id, item)


@router.delete("/{item_id}")
def delete(item_id: int, service: ItemMenuService = Depends(get_service)):
    service.delete(item_id)
    return {"message": "ItemMenu deleted"}
