# app/api/tag_api.py
from fastapi import APIRouter, HTTPException, Depends
from app.core.exceptions import EntityNotFoundError
from app.schemas.tag_schema import TagSchema
from app.services.tag_service import TagService
from app.repository.tag_repository import TagRepository
from app.core.postgres import get_session

router = APIRouter(prefix="/tags", tags=["tags"])


def get_tag_service(session=Depends(get_session)):
    repo = TagRepository(session)
    return TagService(repo)


@router.post("/", status_code=201, response_model=TagSchema)
def create_tag(tag: TagSchema, service: TagService = Depends(get_tag_service)):
    return service.create_tag(tag)


@router.get("/", response_model=list[TagSchema])
def list_tags(service: TagService = Depends(get_tag_service)):
    return service.list_tags()


@router.get("/{tag_nome}", response_model=TagSchema)
def get_tag(tag_nome: str, service: TagService = Depends(get_tag_service)):
    try:
        return service.get_tag(tag_nome)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))


@router.put("/{tag_nome}", response_model=TagSchema)
def update_tag(tag_nome: str, updated_tag: TagSchema, service: TagService = Depends(get_tag_service)):
    try:
        return service.update_tag(tag_nome, updated_tag)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))


@router.delete("/{tag_nome}", status_code=204)
def delete_tag(tag_nome: str, service: TagService = Depends(get_tag_service)):
    try:
        service.delete_tag(tag_nome)
    except EntityNotFoundError:
        raise HTTPException(status_code=404, detail="Tag não encontrada")
