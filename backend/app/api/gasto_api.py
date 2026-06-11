from http.client import HTTPException

from fastapi import APIRouter, Depends

from app.core.exceptions import EntityNotFoundError
from app.core.postgres import get_session
from app.repository.gasto_repository import GastoRepository
from app.repository.viagem_repository import ViagemRepository
from app.schemas.gasto_schema import GastoSchema
from app.services.gasto_service import GastoService
from app.services.viagem_service import ViagemService

router = APIRouter(prefix="/viagem/{viagem_id}/gasto", tags=["gasto"])


def get_gasto_service(session=Depends(get_session)):
    repo = GastoRepository(session)
    return GastoService(repo)


def get_viagem_service(session=Depends(get_session)):
    repo = ViagemRepository(session)
    return ViagemService(repo)


@router.get("/", response_model=list[GastoSchema])
def list_gastos(viagem_id: int, gasto_service: GastoService = Depends(get_gasto_service), viagem_service: ViagemService = Depends(get_viagem_service)):
    try:
        viagem = viagem_service.get_viagem(viagem_id)
        return gasto_service.list_gastos_by_viagem(viagem)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
