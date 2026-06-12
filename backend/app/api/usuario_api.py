from fastapi import APIRouter, Depends, Request

from app.core import base_api
from app.core.postgres import get_session
from app.repository.usuario_repository import UsuarioRepository
from app.schemas.usuario_schema import UsuarioSchema
from app.services.usuario_service import UsuarioService

router = APIRouter(prefix="/usuario", tags=["usuario"])


def get_service(session=Depends(get_session)):
    repo = UsuarioRepository(session)
    return UsuarioService(repo)


@router.get("/", response_model=list[UsuarioSchema])
def list_usuario(request: Request, service: UsuarioService = Depends(get_service)):
    return base_api.list_all(request, service)


@router.get("/{usuario_id}", response_model=UsuarioSchema)
def get_usuario_by_id(usuario_id: int, service: UsuarioService = Depends(get_service)):
    return base_api.get_by_id(usuario_id, service)


@router.post("/", status_code=201, response_model=UsuarioSchema)
def create_usuario(usuario: UsuarioSchema, service: UsuarioService = Depends(get_service)):
    return base_api.create(usuario, service)


@router.put("/{usuario_id}", response_model=UsuarioSchema)
def update_usuario(usuario_id: int, usuario: UsuarioSchema, service: UsuarioService = Depends(get_service)):
    return base_api.update(usuario_id, usuario, service)


@router.delete("/{usuario_id}", status_code=204)
def delete_usuario(usuario_id: int, service: UsuarioService = Depends(get_service)):
    base_api.delete(usuario_id, service)
