from fastapi import FastAPI
from app.api.routes.rag import router as rag_router

app = FastAPI(title="Public Policy RAG Service")
app.include_router(rag_router, prefix="/rag", tags=["rag"])


@app.get("/health")
def health_check():
    return {"status": "ok"}
