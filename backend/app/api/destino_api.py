from fastapi import APIRouter, Depends, Request

from app.core import base_api
from app.core.postgres import get_session
from app.repository.destino_repository import DestinoRepository
from app.schemas.destino_schema import DestinoSchema
from app.services.destino_service import DestinoService

router = APIRouter(prefix="/destino", tags=["destino"])


def get_service(session=Depends(get_session)):
    repo = DestinoRepository(session)
    return DestinoService(repo)


@router.get("/", response_model=list[DestinoSchema])
def list_destino(request: Request, service: DestinoService = Depends(get_service)):
    return base_api.list_all(request, service)


@router.get("/{destino_id}", response_model=DestinoSchema)
def get_destino_by_id(destino_id: int, service: DestinoService = Depends(get_service)):
    return base_api.get_by_id(destino_id, service)


@router.post("/", status_code=201, response_model=DestinoSchema)
def create_destino(destino: DestinoSchema, service: DestinoService = Depends(get_service)):
    return base_api.create(destino, service)


@router.put("/{destino_id}", response_model=DestinoSchema)
def update_destino(destino_id: int, destino: DestinoSchema, service: DestinoService = Depends(get_service)):
    return base_api.update(destino_id, destino, service)


@router.delete("/{destino_id}", status_code=204)
def delete_destino(destino_id: int, service: DestinoService = Depends(get_service)):
    base_api.delete(destino_id, service)
