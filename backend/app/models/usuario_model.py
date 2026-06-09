from sqlalchemy import Column, Integer, String
from app.core.postgres import Base


class UsuarioModel(Base):
    __tablename__ = "usuario"
    id = Column(Integer, primary_key=True)
    nome = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    avatar = Column(String(500))
