from pydantic import BaseModel, EmailStr


class UsuarioSchema(BaseModel):
    id: int | None = None
    nome: str
    email: EmailStr
    avatar: str | None = None

    class Config:
        from_attributes = True
