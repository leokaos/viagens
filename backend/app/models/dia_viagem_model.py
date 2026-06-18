from sqlalchemy import Column, Integer, ForeignKey, Table, Numeric, TIMESTAMP
from sqlalchemy.orm import relationship

from app.core.postgres import Base

dia_viagem_atividade = Table(
    "dia_viagem_atividade",
    Base.metadata,
    Column("atividade_id", Integer, ForeignKey("atividade.id"), primary_key=True),
    Column("dia_viagem_id", Integer, ForeignKey("dia_viagem.id"), primary_key=True),
    extend_existing=True
)


class DiaViagemModel(Base):
    __tablename__ = "dia_viagem"

    id = Column(Integer, primary_key=True)
    data_inicio = Column(TIMESTAMP(timezone=False), nullable=False)
    data_fim = Column(TIMESTAMP(timezone=False), nullable=False)
    valor = Column(Numeric(10, 2), nullable=False)

    viagem_id = Column(Integer, ForeignKey("viagem.id"), nullable=False)
    viagem = relationship("ViagemModel", back_populates="dias")

    atividades = relationship("AtividadeModel", secondary=dia_viagem_atividade)
