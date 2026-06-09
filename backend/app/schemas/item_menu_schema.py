from pydantic import BaseModel


class ItemMenuSchema(BaseModel):
    id: int | None = None
    nome: str
    codigo_acao: str
    icone: str
    order_item: int

    class Config:
        from_attributes = True
