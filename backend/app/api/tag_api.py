from fastapi import APIRouter, Depends, Request

from app.core import base_api
from app.core.postgres import get_session
from app.repository.tag_repository import TagRepository
from app.schemas.tag_schema import TagSchema
from app.services.tag_service import TagService

router = APIRouter(prefix="/tag", tags=["tag"])


def get_service(session=Depends(get_session)):
    repo = TagRepository(session)
    return TagService(repo)


@router.get("/", response_model=list[TagSchema])
def list_tag(request: Request, service: TagService = Depends(get_service)):
    return base_api.list_all(request, service)


@router.get("/{tag_id}", response_model=TagSchema)
def get_tag_by_id(tag_id: int, service: TagService = Depends(get_service)):
    return base_api.get_by_id(tag_id, service)


@router.post("/", status_code=201, response_model=TagSchema)
def create_tag(tag: TagSchema, service: TagService = Depends(get_service)):
    return base_api.create(tag, service)


@router.put("/{tag_id}", response_model=TagSchema)
def update_tag(tag_id: int, tag: TagSchema, service: TagService = Depends(get_service)):
    return base_api.update(tag_id, tag, service)


@router.delete("/{tag_id}", status_code=204)
def delete_tag(tag_id: int, service: TagService = Depends(get_service)):
    base_api.delete(tag_id, service)
