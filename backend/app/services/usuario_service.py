from app.core.base_service import BaseService
from app.models import UsuarioModel
from app.repository.usuario_repository import UsuarioRepository
from app.schemas.usuario_schema import UsuarioSchema


class UsuarioService(BaseService):

    def __init__(self, repository: UsuarioRepository):
        super().__init__(repository, UsuarioModel, UsuarioSchema)
