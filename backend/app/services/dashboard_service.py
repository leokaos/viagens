from datetime import date

from app.repository.dashboard_repository import DashboardRepository
from app.schemas.dashboard_schema import QuickStatusSchema


class DashboardService:

    def __init__(self, repository: DashboardRepository):
        self.repository = repository

    def get_next_trip(self):
        proxima_viagem = self.repository.get_proxima_viagem()

        local = "SEM VIAGENS"
        dias = 0

        if proxima_viagem:
            dias = (proxima_viagem.data_inicio - date.today()).days
            local = proxima_viagem.descricao.upper()

        data = {"type": "nextTrip", "local": local, "dias": dias}

        return QuickStatusSchema(**data)

    def get_budget_status(self):
        total_orcamento, total_gastos = self.repository.get_totais_budget()

        data = {"type": "budget", "total": total_orcamento, "gasto": total_gastos}

        return QuickStatusSchema(**data)

    def get_visited_coutries(self):
        paises = self.repository.get_numero_paises_viajados()

        data = {"type": "visitedCountries", "paises": paises}

        return QuickStatusSchema(**data)
