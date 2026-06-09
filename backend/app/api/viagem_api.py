from fastapi import APIRouter, HTTPException, Depends, Request
from app.core.exceptions import EntityNotFoundError
from app.schemas.viagem_schema import ViagemSchema
from app.services.viagem_service import ViagemService
from app.repository.viagem_repository import ViagemRepository
from app.core.postgres import get_session

router = APIRouter(prefix="/viagem", tags=["viagem"])


def get_viagem_service(session=Depends(get_session)):
    repo = ViagemRepository(session)
    return ViagemService(repo)


@router.post("/", status_code=201, response_model=ViagemSchema)
def create_viagem(viagem: ViagemSchema, service: ViagemService = Depends(get_viagem_service)):
    return service.create_viagem(viagem)


@router.get("/",  response_model=list[ViagemSchema])
def list_viagens(request: Request,service: ViagemService = Depends(get_viagem_service)):
    filtros = dict(request.query_params)
    return service.list_viagens(filtros)


@router.get("/{viagem_id}", response_model=ViagemSchema)
def get_viagem(viagem_id: int, service: ViagemService = Depends(get_viagem_service)):
    try:
        return service.get_viagem(viagem_id)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))


@router.put("/{viagem_id}", response_model=ViagemSchema)
def update_viagem(viagem_id: int, updated_viagem: ViagemSchema, service: ViagemService = Depends(get_viagem_service)):
    try:
        return service.update_viagem(viagem_id, updated_viagem)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))


@router.delete("/{viagem_id}", status_code=204)
def delete_viagem(viagem_id: int, service: ViagemService = Depends(get_viagem_service)):
    try:
        service.delete_viagem(viagem_id)
    except EntityNotFoundError:
        raise HTTPException(status_code=404, detail="Viagem não encontrada")
