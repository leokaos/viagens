from pydantic import BaseModel


class GastoSchema(BaseModel):
    id: int
    descricao: str
    valor: float
    pago: bool

    class Config:
        from_attributes = True
