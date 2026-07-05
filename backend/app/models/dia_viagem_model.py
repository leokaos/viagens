from sqlalchemy import Column, Integer, TIMESTAMP, ForeignKey, Numeric
from sqlalchemy.orm import relationship

from app.core.postgres import Base


class DiaViagemModel(Base):
    __tablename__ = "dia_viagem"

    id = Column(Integer, primary_key=True)
    data_dia = Column(TIMESTAMP(timezone=False), nullable=False)

    viagem_id = Column(Integer, ForeignKey("viagem.id"), nullable=False)
    viagem = relationship("ViagemModel", back_populates="dias")

    atividades = relationship("DiaViagemAtividadeModel", back_populates="dia_viagem")

class DiaViagemAtividadeModel(Base):
    __tablename__ = "dia_viagem_atividade"

    atividade_id = Column(Integer, ForeignKey("atividade.id"), primary_key=True)
    dia_viagem_id = Column(Integer, ForeignKey("dia_viagem.id"), primary_key=True)
    data_inicio = Column(TIMESTAMP(timezone=False), nullable=False)
    data_fim = Column(TIMESTAMP(timezone=False), nullable=False)
    custo = Column(Numeric(10, 2), nullable=False)

    atividade = relationship("AtividadeModel")
    dia_viagem = relationship("DiaViagemModel", back_populates="atividades")