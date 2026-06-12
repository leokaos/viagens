from app.core.base_service import BaseService
from app.models import ItemMenuModel
from app.repository.item_menu_repository import ItemMenuRepository
from app.schemas.item_menu_schema import ItemMenuSchema


class ItemMenuService(BaseService):

    def __init__(self, repository: ItemMenuRepository):
        super().__init__(repository, ItemMenuModel, ItemMenuSchema)
        self.repository = repository
