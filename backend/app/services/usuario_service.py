from app.core.exceptions import EntityNotFoundError
from app.repository.usuario_repository import UsuarioRepository
from app.schemas.usuario_schema import UsuarioSchema


class UsuarioService:
    def __init__(self, repository: UsuarioRepository):
        self.repository = repository

    def create(self, usuario: UsuarioSchema) -> UsuarioSchema:
        db_usuario = self.repository.create(usuario)
        return UsuarioSchema.model_validate(db_usuario)

    def list_all(self) -> list[UsuarioSchema]:
        db_usuarios = self.repository.get_all()
        return [UsuarioSchema.model_validate(u) for u in db_usuarios]

    def get_by_id(self, usuario_id: int) -> UsuarioSchema:
        db_usuario = self.repository.get_by_id(usuario_id)
        if not db_usuario:
            raise EntityNotFoundError("Usuario", usuario_id)
        return UsuarioSchema.model_validate(db_usuario)

    def update(self, usuario_id: int, usuario: UsuarioSchema) -> UsuarioSchema:
        db_usuario = self.repository.update(usuario_id, usuario)
        if not db_usuario:
            raise EntityNotFoundError("Usuario", usuario_id)
        return UsuarioSchema.model_validate(db_usuario)

    def delete(self, usuario_id: int) -> None:
        if not self.repository.delete(usuario_id):
            raise EntityNotFoundError("Usuario", usuario_id)
