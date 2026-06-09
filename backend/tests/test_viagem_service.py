import pytest
from app.services.viagem_service import ViagemService, ViagemNotFoundError
from app.schemas.viagem_schema import Viagem
from datetime import date


class TestViagemService:

    def setup_method(self):
        self.service = ViagemService()
        from app.services import viagem_service

        viagem_service.viagens_db = []

    def test_create_viagem(self):
        viagem = Viagem(destino="Paris", data_inicio=date(2025, 6, 1), data_fim=date(2025, 6, 10), orcamento=5000.0)

        result = self.service.create_viagem(viagem)

        assert result["id"] == 1
        assert result["destino"] == "Paris"

    def test_list_viagens_empty(self):
        result = self.service.list_viagens()
        assert result == []

    def test_get_viagem_not_found(self):
        with pytest.raises(ViagemNotFoundError):
            self.service.get_viagem(999)

    def test_update_viagem(self):
        viagem = Viagem(destino="London", data_inicio=date(2025, 7, 1), data_fim=date(2025, 7, 5), orcamento=3000.0)
        created = self.service.create_viagem(viagem)

        updated_viagem = Viagem(destino="Londres", data_inicio=date(2025, 7, 1), data_fim=date(2025, 7, 5), orcamento=3500.0)
        result = self.service.update_viagem(created["id"], updated_viagem)

        assert result["destino"] == "Londres"
        assert result["orcamento"] == 3500.0

    def test_delete_viagem(self):
        viagem = Viagem(destino="Berlin", data_inicio=date(2025, 8, 1), data_fim=date(2025, 8, 10), orcamento=4000.0)
        created = self.service.create_viagem(viagem)

        self.service.delete_viagem(created["id"])

        with pytest.raises(ViagemNotFoundError):
            self.service.get_viagem(created["id"])
