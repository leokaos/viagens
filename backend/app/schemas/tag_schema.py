from pydantic import BaseModel


class TagSchema(BaseModel):
    nome: str
    descricao: str

    class Config:
        from_attributes = True
