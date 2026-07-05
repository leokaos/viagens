from pydantic import BaseModel


class AtividadeSchema(BaseModel):
    id: int
    descricao: str
    custo: float

    class Config:
        from_attributes = True
