// src/pages/CreateNote.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNote } = useNotes();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addNote(title, content);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>✏️ Create a New Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <textarea
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
}
