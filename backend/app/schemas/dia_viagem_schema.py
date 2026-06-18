from datetime import datetime
from decimal import Decimal

from pydantic import BaseModel

from app.schemas.atividade_schema import AtividadeSchema


class DiaViagemSchema(BaseModel):
    id: int
    data_inicio: datetime
    data_fim: datetime
    valor: Decimal
    viagem_id: int
    atividades: list[AtividadeSchema] = []

    class Config:
        from_attributes = True
