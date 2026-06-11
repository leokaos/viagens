from fastapi import APIRouter, Depends

from app.core.postgres import get_session
from app.repository.dashboard_repository import DashboardRepository
from app.schemas.dashboard_schema import QuickStatusSchema
from app.services.dashboard_service import DashboardService

router = APIRouter(prefix="/dashboard", tags=["dashboard"])


def get_dashboard_service(session=Depends(get_session)):
    repo = DashboardRepository(session)
    return DashboardService(repo)


@router.get("/", response_model=list[QuickStatusSchema])
def get_all_quick_status(service: DashboardService = Depends(get_dashboard_service)):
    return [service.get_next_trip(), service.get_budget_status(), service.get_visited_coutries()]
