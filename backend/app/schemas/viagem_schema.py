from datetime import date
from pydantic import BaseModel

from app.models.viagem_model import StatusViagem
from app.schemas.destino_schema import DestinoSchema
from app.schemas.gasto_schema import GastoSchema


class ViagemSchema(BaseModel):
    id: int
    data_inicio: date
    data_fim: date
    orcamento: float
    observacao: str | None
    status: StatusViagem
    descricao: str
    destinos: list[DestinoSchema] = []
    gastos: list[GastoSchema] = []
    imagem: str

    class Config:
        from_attributes = True
