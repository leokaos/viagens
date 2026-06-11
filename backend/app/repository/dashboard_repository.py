from sqlalchemy import select, func
from sqlalchemy.orm import Session
from datetime import date

from app.models import ViagemModel
from app.models.gasto_model import GastoModel


class DashboardRepository:

    def __init__(self, session: Session):
        self.session = session

    def get_proxima_viagem(self) -> ViagemModel | None:
        hoje = date.today()

        stmt = select(ViagemModel).where(
            ViagemModel.data_inicio >= hoje,
            ViagemModel.status != 'CANCELLED'
        ).order_by(ViagemModel.data_inicio.asc()).limit(1)

        return self.session.execute(stmt).scalar_one_or_none()

    def get_totais_budget(self):
        stmt = select(
            select(func.sum(ViagemModel.orcamento)).scalar_subquery().label("total_orcamento"),
            select(func.sum(GastoModel.valor)).scalar_subquery().label("total_gastos")
        )

        row = self.session.execute(stmt).one()

        return row.total_orcamento, row.total_gastos
