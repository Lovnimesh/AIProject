import axios from "axios";

const client = axios.create({
  baseURL: process.env.AI_SERVICE_URL || "http://127.0.0.1:8000",
  timeout: 30000
});

export async function queryRagService(payload) {
  const response = await client.post("/rag/query", payload);
  return response.data;
}
