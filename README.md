# Public Policy RAG Chatbot

A clean plan for building a chatbot that answers from public policy data, tracks policy changes over time, and uses retrieval instead of traditional retraining for most updates.

## Core Idea

This project should be built as a **RAG chatbot**, not as a model that gets retrained every time a new policy is published.

The system has three main parts:
- a chatbot for answering questions
- a RAG pipeline for retrieval
- a change-tracking pipeline for policy updates

## Big Decision

You do **not** need a separate ML model just to track policy changes for the first version.

A better first approach is:
- use the chatbot for Q&A
- use ingestion, versioning, and diffing for policy updates
- add a specialized model later only if you need advanced classification, risk scoring, or forecasting

## Recommended Stack

- **React** for frontend
- **Express** for the main backend
- **FastAPI** for RAG and document processing
- **PostgreSQL** for metadata and versions
- **Qdrant** or **Chroma** for vector storage

## Why This Stack

- React gives you a strong chatbot UI.
- Express handles auth, app APIs, sessions, and orchestration.
- Python is better for embeddings, chunking, retrieval, and policy document processing.
- FastAPI is a strong modern choice for AI service endpoints.

## Important Clarification

In a RAG system, you usually do not "train the model" on your public policy documents.

What you actually do is:
- ingest documents
- extract and clean text
- split them into chunks
- create embeddings
- store the embeddings in a vector database
- retrieve relevant chunks during chat

That is the core RAG workflow.

## End-to-End Architecture

1. **React** sends chat or upload requests.
2. **Express** receives requests, handles auth/session logic, and forwards RAG work to FastAPI.
3. **FastAPI** extracts text, chunks documents, creates embeddings, queries the vector database, and returns answers with sources.
4. **PostgreSQL** stores metadata, policy versions, and change history.
5. **Vector DB** stores chunk embeddings for semantic search.

## Ingestion Workflow

This is how policy documents get added into the knowledge base.

1. User uploads a PDF or submits a public policy source.
2. Express receives the request and stores metadata.
3. FastAPI extracts and cleans the text.
4. The document is split into chunks.
5. Embeddings are created for each chunk.
6. Chunks, embeddings, and metadata are stored in the vector database.
7. Version and source information are stored in PostgreSQL.

## Chat Workflow

This is how the chatbot answers user questions.

1. React sends a user question to Express.
2. Express forwards the query to FastAPI.
3. FastAPI creates a query embedding.
4. Vector search finds the most relevant policy chunks.
5. The LLM receives the retrieved context.
6. FastAPI returns an answer with citations.
7. Express returns that result to the frontend.

## Policy Change Tracking

To track updates over time, the system should include a scheduled ingestion flow.

Recommended flow:
- check policy sources on a schedule
- detect new or updated documents
- compare old and new versions
- store change summaries and updated embeddings
- allow the chatbot to answer "what changed?" questions

## First Step of the Project

The first real step is **not** the chatbot UI. It is the **data ingestion pipeline**.

Start with this:
- pick one public policy source
- ingest one document end to end
- extract text, chunk it, embed it, and store it
- test retrieval before building chat answers

If ingestion is not working, the chatbot has nothing reliable to answer from.

## Project Setup Created

The starter project workspace is created at:

`C:\Users\nimes\OneDrive\Desktop\Asusv16\AIProject`

### Included Services

- **frontend**: React + Vite starter
- **backend**: Express API starter
- **ai-service**: FastAPI starter

## Project Folder Map

- `frontend/` for the chatbot UI
- `backend/` for the Express API gateway
- `ai-service/` for ingestion, retrieval, and RAG endpoints
- `docs/` for architecture notes

## Run Commands

### Frontend

```powershell
cd C:\Users\nimes\OneDrive\Desktop\Asusv16\AIProject\frontend
npm run dev
```

### Backend

```powershell
cd C:\Users\nimes\OneDrive\Desktop\Asusv16\AIProject\backend
npm run dev
```

### AI Service

```powershell
cd C:\Users\nimes\OneDrive\Desktop\Asusv16\AIProject\ai-service
.\.venv\Scripts\python -m uvicorn app.main:app --reload
```

## Current Status

The starter is already wired and verified at a basic level:
- frontend dependencies installed
- backend dependencies installed
- Python virtual environment created
- FastAPI dependencies installed
- frontend build verified
- backend load verified
- FastAPI app import verified

## What To Build Next

A strong next sequence is:

1. Build one ingestion endpoint in FastAPI.
2. Add document parsing for PDF or HTML policy data.
3. Add chunking and metadata extraction.
4. Connect an embedding model.
5. Store vectors in Qdrant or Chroma.
6. Test retrieval with one policy question.
7. Connect the Express chat route to real RAG output.
8. Add version comparison for policy changes.

## Summary

This project should be built as a retrieval-based public policy assistant, not as a repeatedly retrained chatbot.

The winning structure is:
- React for the UI
- Express for the app backend
- FastAPI for RAG and policy processing
- PostgreSQL for metadata and versions
- a vector database for retrieval

The first milestone is getting one policy document ingested, embedded, stored, and retrievable.
