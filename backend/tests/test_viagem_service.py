from datetime import datetime
from unittest.mock import Mock, patch

import pytest

from app.core.exceptions import ValidationError
from app.models.viagem_model import StatusViagem
from app.schemas.viagem_schema import ViagemSchema
from app.services.viagem_service import ViagemService

mock_repository = Mock()
service = ViagemService(mock_repository)


def test_should_raise_an_exception_due_date_before_today():
    viagem = create_default_viagem()

    with pytest.raises(ValidationError) as exc:
        service.create(viagem)

    assert str(exc.value) == "Data de inicio deve ser depois de hoje!"


def test_should_save_an_image_with_success():
    viagem = create_default_viagem()

    with patch('app.services.viagem_service.create_imagem_and_save') as mock_create:
        with patch('app.services.viagem_service.settings') as mock_settings:
            mock_settings.BASE_URL = 'https://teste.com/'

            mock_repository.update.return_value = True
            service.get_by_id = Mock(return_value=viagem)

            service.adiciona_foto(1, b'foto_bytes')

            mock_create.assert_called_once_with(b'foto_bytes', 'foto_capa1.jpg')
            mock_repository.update.assert_called_once_with(1, {'imagem': 'https://teste.com/foto_capa1.jpg'})


def create_default_viagem():
    return ViagemSchema(
        id=None,
        data_inicio=datetime(2025, 1, 1),
        data_fim=datetime(2025, 1, 10),
        orcamento=1000.00,
        observacao=None,
        status=StatusViagem.PLANNING,
        descricao="Viagem de teste",
        imagem="teste.jpg"
    )
