from fastapi import APIRouter, Depends, Request, HTTPException

from app.core.exceptions import EntityNotFoundError
from app.core.postgres import get_session
from app.repository.usuario_repository import UsuarioRepository
from app.services.usuario_service import UsuarioService
from app.schemas.usuario_schema import UsuarioSchema

router = APIRouter(prefix="/usuario", tags=["Usuario"])


def get_service(session=Depends(get_session)):
    repository = UsuarioRepository(session)
    return UsuarioService(repository)


@router.get("/", response_model=list[UsuarioSchema])
def list_destinos(request: Request, service: UsuarioService = Depends(get_service)):
    filtros = dict(request.query_params)
    return service.list_all(filtros=filtros)


@router.get("/{tag_id}", response_model=UsuarioSchema)
def get_by_id(tag_id: int, service: UsuarioService = Depends(get_service)):
    try:
        return service.get_by_id(tag_id)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
