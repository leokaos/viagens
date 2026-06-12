from sqlalchemy import Column, Integer, String, Text, Table, ForeignKey
from sqlalchemy.orm import relationship
from app.core.postgres import Base

# Tabela associativa destino_tags
destino_tags = Table(
    "destino_tags",
    Base.metadata,
    Column("destino_id", Integer, ForeignKey("destino.id"), primary_key=True),
    Column("tag", String(100), ForeignKey("tag.nome"), primary_key=True),
    extend_existing=True
)


class DestinoModel(Base):
    __tablename__ = "destino"

    id = Column(Integer, primary_key=True)
    nome = Column(String(200), nullable=False)
    descricao = Column(Text)
    pais = Column(String(2), nullable=False)

    tags = relationship("TagModel", secondary=destino_tags, back_populates="destinos")
