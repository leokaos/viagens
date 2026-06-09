from app.core.exceptions import EntityNotFoundError
from app.repository.item_menu_repository import ItemMenuRepository
from app.schemas.item_menu_schema import ItemMenuSchema


class ItemMenuService:
    def __init__(self, repository: ItemMenuRepository):
        self.repository = repository

    def create(self, item: ItemMenuSchema) -> ItemMenuSchema:
        db_item = self.repository.create(item)
        return ItemMenuSchema.model_validate(db_item)

    def list_all(self) -> list[ItemMenuSchema]:
        db_itens = self.repository.get_all({"order": "order_item"})
        return [ItemMenuSchema.model_validate(i) for i in db_itens]

    def get_by_id(self, item_id: int) -> ItemMenuSchema:
        db_item = self.repository.get_by_id(item_id)
        if not db_item:
            raise EntityNotFoundError("ItemMenu", item_id)
        return ItemMenuSchema.model_validate(db_item)

    def update(self, item_id: int, item: ItemMenuSchema) -> ItemMenuSchema:
        db_item = self.repository.update(item_id, item)
        if not db_item:
            raise EntityNotFoundError("ItemMenu", item_id)
        return ItemMenuSchema.model_validate(db_item)

    def delete(self, item_id: int) -> None:
        if not self.repository.delete(item_id):
            raise EntityNotFoundError("ItemMenu", item_id)
