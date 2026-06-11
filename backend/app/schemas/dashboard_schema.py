from typing import Optional

from pydantic import BaseModel


class QuickStatusSchema(BaseModel):
    type: str
    label: str
    value: str
    status: Optional[str] = None
    color: Optional[str] = None
    subtext: Optional[str] = None

    class Config:
        from_attributes = True
