from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class QueryRequest(BaseModel):
    question: str


@router.post("/query")
def query_rag(payload: QueryRequest):
    return {
        "answer": f"Placeholder answer for: {payload.question}",
        "sources": []
    }
