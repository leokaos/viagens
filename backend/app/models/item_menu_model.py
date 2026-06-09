from sqlalchemy import Column, Integer, String
from app.core.postgres import Base


class ItemMenuModel(Base):
    __tablename__ = "item_menu"
    id = Column(Integer, primary_key=True)
    nome = Column(String(100), nullable=False)
    codigo_acao = Column(String(50), nullable=False, unique=True)
    icone = Column(String(100), nullable=False)
    order_item = Column(Integer, nullable=False, unique=True)
