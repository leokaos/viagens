from datetime import date
from pydantic import BaseModel

from app.schemas.destino_schema import DestinoSchema


class ViagemSchema(BaseModel):
    id: int
    data_inicio: date
    data_fim: date
    orcamento: float
    observacao: str | None
    destinos: list[DestinoSchema] = []

    class Config:
        from_attributes = True
