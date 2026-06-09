# Travel Planner API

Sistema de planejamento de viagens com FastAPI, PostgreSQL e MongoDB.

## Tecnologias

- **FastAPI** - Framework web
- **PostgreSQL** - Dados relacionais (viagens, atividades, usuários)
- **MongoDB** - Dados flexíveis (checklists dinâmicas, anotações)
- **Docker** - Containerização com hot reload
- **Pytest** - Testes (TDD)

## Funcionalidades

- Criar viagem com destino, datas e orçamento
- Adicionar atividades diárias (horário, local, custo)
- Checklist de packing customizável por viagem
- Checklist dinâmica (itens com estrutura variável por viagem)
- Anotações flexíveis por dia/local (armazenadas no MongoDB)
- Sugestão de roteiro baseado em orçamento e dias disponíveis
- Exportar roteiro em PDF

## Comandos iniciais

### Inicia ambiente no docker
```bash
docker compose up -d
```

### Instala o UV
```bash
pip install uv
```

### Adiciona as bibliotecas
```bash
uv add --no-sync fastapi uvicorn psycopg2-binary motor pytest
```

### Roda o servidor
```bash
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

```bash
python -m pytest tests/ -v
```

```bash
python -m uvicorn app.main:app --reload
```