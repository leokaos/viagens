from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.postgres import get_session
from app.repository.usuario_repository import UsuarioRepository
from app.services.usuario_service import UsuarioService
from app.schemas.usuario_schema import UsuarioSchema

router = APIRouter(prefix="/usuario", tags=["Usuario"])


def get_service(session=Depends(get_session)):
    repository = UsuarioRepository(session)
    return UsuarioService(repository)


@router.post("/", response_model=UsuarioSchema)
def create(usuario: UsuarioSchema, service: UsuarioService = Depends(get_service)):
    return service.create(usuario)


@router.get("/", response_model=list[UsuarioSchema])
def list_all(service: UsuarioService = Depends(get_service)):
    return service.list_all()


@router.get("/{usuario_id}", response_model=UsuarioSchema)
def get_by_id(usuario_id: int, service: UsuarioService = Depends(get_service)):
    return service.get_by_id(usuario_id)


@router.put("/{usuario_id}", response_model=UsuarioSchema)
def update(usuario_id: int, usuario: UsuarioSchema, service: UsuarioService = Depends(get_service)):
    return service.update(usuario_id, usuario)


@router.delete("/{usuario_id}")
def delete(usuario_id: int, service: UsuarioService = Depends(get_service)):
    service.delete(usuario_id)
    return {"message": "Usuario deleted"}
