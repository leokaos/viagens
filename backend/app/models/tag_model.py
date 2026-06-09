from sqlalchemy import Column, String, Text
from sqlalchemy.orm import relationship
from app.core.postgres import Base
from app.models.destino_model import destino_tags


class TagModel(Base):
    __tablename__ = "tag"

    nome = Column(String(100), primary_key=True)
    descricao = Column(Text, nullable=False)

    destinos = relationship("DestinoModel", secondary=destino_tags, back_populates="tags")
