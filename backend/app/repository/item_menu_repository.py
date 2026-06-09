from app.core.base_repository import BaseRepository
from app.models.item_menu_model import ItemMenuModel


class ItemMenuRepository(BaseRepository):
    def __init__(self, session):
        super().__init__(session, ItemMenuModel)
