# Architecture

## Flow
1. React sends chat requests to Express.
2. Express handles auth, sessions, and forwards RAG queries to FastAPI.
3. FastAPI performs ingestion, retrieval, and response generation.
4. PostgreSQL stores metadata and document versions.
5. A vector database stores embeddings for semantic search.
