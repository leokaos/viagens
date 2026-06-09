from sqlalchemy import Column, Integer, Date, Float, Text, Table, ForeignKey
from sqlalchemy.orm import relationship

from app.core.postgres import Base

destino_viagens = Table(
    "destino_viagens",
    Base.metadata,
    Column("destino_id", Integer, ForeignKey("destino.id"), primary_key=True),
    Column("viagem_id", Integer, ForeignKey("viagem.id"), primary_key=True),
    extend_existing=True
)


class ViagemModel(Base):
    __tablename__ = "viagem"

    id = Column(Integer, primary_key=True)
    data_inicio = Column(Date, nullable=False)
    data_fim = Column(Date, nullable=False)
    orcamento = Column(Float, nullable=False)
    observacao = Column(Text)

    destinos = relationship("DestinoModel", secondary=destino_viagens)
