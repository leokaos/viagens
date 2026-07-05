from datetime import datetime
from decimal import Decimal

from pydantic import BaseModel

from app.schemas.atividade_schema import AtividadeSchema


class DiaViagemSchema(BaseModel):
    id: int
    data_dia: datetime
    atividades: list[DiaViagemAtividadeSchema] = []

    class Config:
        from_attributes = True


class DiaViagemAtividadeSchema(BaseModel):
    data_inicio: datetime
    data_fim: datetime
    custo: float
    atividade: AtividadeSchema

    class Config:
        from_attributes = True
