from fastapi import APIRouter, HTTPException, Depends, Request
from app.core.exceptions import EntityNotFoundError
from app.schemas.destino_schema import DestinoSchema
from app.services.destino_service import DestinoService
from app.repository.destino_repository import DestinoRepository
from app.core.postgres import get_session

router = APIRouter(prefix="/destinos", tags=["destinos"])


def get_destino_service(session=Depends(get_session)):
    repo = DestinoRepository(session)
    return DestinoService(repo)


@router.get("/", response_model=list[DestinoSchema])
def list_destinos(request: Request, service: DestinoService = Depends(get_destino_service)):
    filtros = dict(request.query_params)
    return service.list_all(filtros=filtros)


@router.get("/{destino_id}", response_model=DestinoSchema)
def get_destino(destino_id: int, service: DestinoService = Depends(get_destino_service)):
    try:
        return service.get_by_id(destino_id)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
