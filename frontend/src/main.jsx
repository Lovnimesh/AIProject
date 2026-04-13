import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Public Policy RAG</p>
        <h1>Chat with policy documents and track changes.</h1>
        <p className="lede">
          This starter app connects a React chat UI to Express and a FastAPI RAG
          service.
        </p>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
