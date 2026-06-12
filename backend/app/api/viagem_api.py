from fastapi import APIRouter, HTTPException, Depends, Request

from app.core.exceptions import EntityNotFoundError
from app.core.postgres import get_session
from app.repository.viagem_repository import ViagemRepository
from app.schemas.viagem_schema import ViagemSchema
from app.services.viagem_service import ViagemService

router = APIRouter(prefix="/viagem", tags=["viagem"])


def get_service(session=Depends(get_session)):
    repo = ViagemRepository(session)
    return ViagemService(repo)


@router.get("/", response_model=list[ViagemSchema])
def list_destinos(request: Request, service: ViagemService = Depends(get_service)):
    filtros = dict(request.query_params)
    return service.list_all(filtros=filtros)


@router.get("/{tag_id}", response_model=ViagemSchema)
def get_by_id(tag_id: int, service: ViagemService = Depends(get_service)):
    try:
        return service.get_by_id(tag_id)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
