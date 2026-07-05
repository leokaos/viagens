from datetime import date

from app.core.base_service import BaseService
from app.core.exceptions import ValidationError
from app.models.viagem_model import ViagemModel
from app.repository.viagem_repository import ViagemRepository
from app.schemas.viagem_schema import ViagemSchema
from app.services.picture_service import create_imagem_and_save
from app.core.config import settings


class ViagemService(BaseService):
    def __init__(self, repository: ViagemRepository):
        super().__init__(repository, ViagemModel, ViagemSchema)

    def pre_create(self, model: ViagemSchema):
        if model.data_inicio < date.today():
            raise ValidationError("Data de inicio deve ser depois de hoje!")

    def adiciona_foto(self, viagem_id: int, foto_bytes: bytes) -> ViagemModel:
        nome_foto = f'foto_capa{viagem_id}.jpg'
        create_imagem_and_save(foto_bytes, nome_foto)

        self.repository.update(viagem_id, {"imagem": f'{settings.BASE_URL}{nome_foto}'})

        return self.get_by_id(viagem_id)
