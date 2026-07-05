from datetime import date

from pydantic import BaseModel

from app.models.viagem_model import StatusViagem
from app.schemas.destino_schema import DestinoSchema
from app.schemas.dia_viagem_schema import DiaViagemSchema
from app.schemas.gasto_schema import GastoSchema


class ViagemSchema(BaseModel):
    id: int | None
    data_inicio: date
    data_fim: date
    orcamento: float
    observacao: str | None
    status: StatusViagem
    descricao: str
    destinos: list[DestinoSchema] = []
    gastos: list[GastoSchema] = []
    dias: list[DiaViagemSchema] = []
    imagem: str

    class Config:
        from_attributes = True
