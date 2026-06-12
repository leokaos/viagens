from sqlalchemy import select, func
from sqlalchemy.orm import Session
from datetime import date

from app.models import ViagemModel, DestinoModel
from app.models.gasto_model import GastoModel
from app.models.viagem_model import StatusViagem, destino_viagens


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
        stmt = (select(
            func.sum(ViagemModel.orcamento).label("total_orcamento"),
            func.sum(GastoModel.valor).label("total_gastos")
        ).select_from(ViagemModel)
                .join(GastoModel, GastoModel.viagem_id == ViagemModel.id)
                .where(ViagemModel.status == StatusViagem.CONFIRMED))

        result = self.session.execute(stmt).one()

        return result.total_orcamento or 0, result.total_gastos or 0

    def get_numero_paises_viajados(self):
        stmt = (select(
            func.count(func.distinct(DestinoModel.pais)).label("count_paises")
        ).select_from(ViagemModel)
                .join(destino_viagens, destino_viagens.c.viagem_id == ViagemModel.id)
                .join(DestinoModel, DestinoModel.id == destino_viagens.c.destino_id)
                .where(ViagemModel.status.in_([StatusViagem.CONFIRMED, StatusViagem.ONGOING])))

        result = self.session.execute(stmt).scalar() or 0

        return result or 0
