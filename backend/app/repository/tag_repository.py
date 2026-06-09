from app.core.base_repository import BaseRepository
from app.models.tag_model import TagModel


class TagRepository(BaseRepository):
    def __init__(self, session):
        super().__init__(session, TagModel)
