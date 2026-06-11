from app.repository.dashboard_repository import DashboardRepository
from app.schemas.dashboard_schema import QuickStatusSchema
from datetime import date


class DashboardService:

    def __init__(self, repository: DashboardRepository):
        self.repository = repository

    def get_next_trip(self):
        proxima_viagem = self.repository.get_proxima_viagem()

        value = ""
        label = "NO UPCOMING TRIPS"

        if proxima_viagem:
            value = str((proxima_viagem.data_inicio - date.today()).days)
            label = proxima_viagem.descricao.upper()

        return QuickStatusSchema(type="nextTrip", label=label, value=value)

    def get_budget_status(self):
        total_orcamento, total_gastos = self.repository.get_totais_budget()

        value = f"${total_gastos:,.0f}"
        subtext = f"${total_orcamento:,.0f}"
        status = ("DENTRO DO ORÇAMENTO" if total_gastos <= total_orcamento else "EXCEDIDO")
        color = ("bg-green-500" if total_gastos <= total_orcamento else "bg-red-500")

        return QuickStatusSchema(type="budget", label="TOTAL USADO", value=value, status=status, color=color, subtext=subtext)

    def get_visited_coutries(self):
        return QuickStatusSchema(type="visitedCountries", label="COUNTRIES VISITED", value="14", status="EXPLORER", color="bg-orange-500")
