from app.core.base_service import BaseService
from app.models.tag_model import TagModel
from app.repository.tag_repository import TagRepository
from app.schemas.tag_schema import TagSchema


class TagService(BaseService):

    def __init__(self, repository: TagRepository):
        super().__init__(repository, TagModel, TagSchema)
