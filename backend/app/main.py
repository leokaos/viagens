from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.destino_api import router as destino_api
from app.api.viagem_api import router as viagem_api
from app.api.tag_api import router as tag_api
from app.api.usuario_api import router as usario_api
from app.api.item_menu_api import router as item_menu_api

app = FastAPI(title="Viagens do Léo")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # qualquer origem
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(viagem_api)
app.include_router(destino_api)
app.include_router(tag_api)
app.include_router(usario_api)
app.include_router(item_menu_api)
