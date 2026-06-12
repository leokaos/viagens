from fastapi import APIRouter, HTTPException, Depends, Request

from app.core.exceptions import EntityNotFoundError
from app.core.postgres import get_session
from app.repository.tag_repository import TagRepository
from app.schemas.tag_schema import TagSchema
from app.services.tag_service import TagService

router = APIRouter(prefix="/tags", tags=["tags"])


def get_service(session=Depends(get_session)):
    repo = TagRepository(session)
    return TagService(repo)


@router.get("/", response_model=list[TagSchema])
def list_destinos(request: Request, service: TagService = Depends(get_service)):
    filtros = dict(request.query_params)
    return service.list_all(filtros=filtros)


@router.get("/{tag_id}", response_model=TagSchema)
def get_by_id(tag_id: int, service: TagService = Depends(get_service)):
    try:
        return service.get_by_id(tag_id)
    except EntityNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
