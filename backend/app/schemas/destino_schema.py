from pydantic import BaseModel

from app.schemas.tag_schema import TagSchema


class DestinoSchema(BaseModel):
    id: int
    nome: str
    descricao: str | None
    tags: list[TagSchema] = []

    class Config:
        from_attributes = True
