from app.core.base_repository import BaseRepository
from app.models.usuario_model import UsuarioModel


class UsuarioRepository(BaseRepository):
    def __init__(self, session):
        super().__init__(session, UsuarioModel)
