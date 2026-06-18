from pydantic import BaseModel


class AtividadeSchema(BaseModel):
    id: int
    descricao: str

    class Config:
        from_attributes = True
