from fastapi import APIRouter, HTTPException, Depends
from app.core.exceptions import EntityNotFoundError
from app.schemas.destino_schema import DestinoSchema
from app.services.destino_service import DestinoService
from app.repository.destino_repository import DestinoRepository
from app.core.postgres import get_session

router = APIRouter(prefix="/destinos", tags=["destinos"])


def get_destino_service(session=Depends(get_session)):
    repo = DestinoRepository(session)
    return DestinoService(repo)


@router.post("/", status_code=201, response_model=DestinoSchema)
def create_destino(destino: DestinoSchema, service: DestinoService = Depends(get_destino_service)):
    return service.create_destino(destino)


@router.get("/", response_model=list[DestinoSchema])
def list_destinos(service: DestinoService = Depends(get_destino_service)):
    return service.list_destinos()


@router.get("/{destino_id}", response_model=DestinoSchema)
def get_destino(destino_id: int, service: DestinoService = Depends(get_destino_service)):
    try:
        return service.get_destino(destino_id)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))


@router.put("/{destino_id}", response_model=DestinoSchema)
def update_destino(destino_id: int, updated_destino: DestinoSchema, service: DestinoService = Depends(get_destino_service)):
    try:
        return service.update_destino(destino_id, updated_destino)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))


@router.delete("/{destino_id}", status_code=204)
def delete_destino(destino_id: int, service: DestinoService = Depends(get_destino_service)):
    try:
        service.delete_destino(destino_id)
    except EntityNotFoundError:
        raise HTTPException(status_code=404, detail="Destino não encontrado")
