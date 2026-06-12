from fastapi import APIRouter, Depends, Request

from app.core import base_api
from app.core.postgres import get_session
from app.repository.viagem_repository import ViagemRepository
from app.schemas.viagem_schema import ViagemSchema
from app.services.viagem_service import ViagemService

router = APIRouter(prefix="/viagem", tags=["viagem"])


def get_service(session=Depends(get_session)):
    repo = ViagemRepository(session)
    return ViagemService(repo)


@router.get("/", response_model=list[ViagemSchema])
def list_viagem(request: Request, service: ViagemService = Depends(get_service)):
    return base_api.list_all(request, service)


@router.get("/{viagem_id}", response_model=ViagemSchema)
def get_viagem_by_id(viagem_id: int, service: ViagemService = Depends(get_service)):
    return base_api.get_by_id(viagem_id, service)


@router.post("/", status_code=201, response_model=ViagemSchema)
def create_viagem(viagem: ViagemSchema, service: ViagemService = Depends(get_service)):
    return base_api.create(viagem, service)


@router.put("/{viagem_id}", response_model=ViagemSchema)
def update_viagem(viagem_id: int, viagem: ViagemSchema, service: ViagemService = Depends(get_service)):
    return base_api.update(viagem_id, viagem, service)


@router.delete("/{viagem_id}", status_code=204)
def delete_viagem(viagem_id: int, service: ViagemService = Depends(get_service)):
    base_api.delete(viagem_id, service)
