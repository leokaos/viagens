from pydantic import BaseModel


class QuickStatusSchema(BaseModel):
    type: str

    class Config:
        from_attributes = True
        extra = "allow"
