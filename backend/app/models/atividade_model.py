from sqlalchemy import Column, Integer, Text

from app.core.postgres import Base


class AtividadeModel(Base):
    __tablename__ = "atividade"

    id = Column(Integer, primary_key=True)
    descricao = Column(Text, nullable=False)
