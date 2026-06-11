from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from app.core.postgres import Base


class GastoModel(Base):
    __tablename__ = "gasto"

    id = Column(Integer, primary_key=True)
    descricao = Column(String(255), nullable=False)
    valor = Column(Float, nullable=False)
    pago = Column(Boolean, nullable=False, default=False)

    viagem_id = Column(Integer, ForeignKey("viagem.id"), nullable=False)
    viagem = relationship("ViagemModel", back_populates="gastos")
