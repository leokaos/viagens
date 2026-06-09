from app.core.exceptions import EntityNotFoundError
from app.models.tag_model import TagModel
from app.repository.tag_repository import TagRepository
from app.schemas.tag_schema import TagSchema
from sqlalchemy.orm import selectinload


class TagService:
    def __init__(self, repository: TagRepository):
        self.repository = repository

    def create_tag(self, tag: TagSchema) -> TagSchema:
        db_tag = self.repository.create(tag.model_dump())
        return TagSchema.model_validate(db_tag)

    def list_tags(self) -> list[TagSchema]:
        db_tags = self.repository.get_all(options=[selectinload(TagModel.destinos)])
        return [TagSchema.model_validate(t) for t in db_tags]

    def get_tag(self, tag_nome: str) -> TagSchema:
        db_tag = self.repository.get_by_id(tag_nome, options=[selectinload(TagModel.destinos)])
        if not db_tag:
            raise EntityNotFoundError("Tag", tag_nome)
        return TagSchema.model_validate(db_tag)

    def update_tag(self, tag_nome: str, updated_tag: TagSchema) -> TagSchema:
        # Remove o nome do dict se existir para não tentar atualizar a PK
        data = updated_tag.model_dump()
        if 'nome' in data:
            del data['nome']

        db_tag = self.repository.update(tag_nome, data)
        if not db_tag:
            raise EntityNotFoundError("Tag", tag_nome)
        return TagSchema.model_validate(db_tag)

    def delete_tag(self, tag_nome: str) -> None:
        if not self.repository.delete(tag_nome):
            raise EntityNotFoundError("Tag", tag_nome)
