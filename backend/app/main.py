from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.destino_api import router as destino_api
from app.api.viagem_api import router as viagem_api
from app.api.tag_api import router as tag_api
from app.api.usuario_api import router as usario_api
from app.api.item_menu_api import router as item_menu_api
from app.api.dashboard_api import router as dashboard_api
from app.api.gasto_api import router as gasto_api

from fastapi.staticfiles import StaticFiles  # <-- ADICIONE ESTA LINHA
import os  # <-- ADICIONE ESTA LINHA (se não tiver)

app = FastAPI(title="Viagens do Léo")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # qualquer origem
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#####################################APENAS PARA TESTE#################################

# SERVE ARQUIVOS ESTÁTICOS (IMAGENS)
static_dir = "static"
if os.path.exists(static_dir):
    app.mount("/static", StaticFiles(directory=static_dir), name="static")
    print(f"✅ Servindo arquivos estáticos de: {static_dir}")
else:
    print(f"⚠️ Pasta '{static_dir}' não encontrada. Criando...")
    os.makedirs(static_dir, exist_ok=True)
    app.mount("/static", StaticFiles(directory=static_dir), name="static")

#####################################APENAS PARA TESTE#################################

app.include_router(viagem_api)
app.include_router(destino_api)
app.include_router(tag_api)
app.include_router(usario_api)
app.include_router(item_menu_api)
app.include_router(dashboard_api)
app.include_router(gasto_api)
