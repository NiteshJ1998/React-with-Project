// src/pages/ViewNote.jsx
import { useParams, Link } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

export default function ViewNote() {
  const { id } = useParams();
  const { notes } = useNotes();
  const note = notes.find((n) => n.id === Number(id));

  if (!note) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Note not found</h2>
        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <Link to="/">Back</Link>
    </div>
  );
}
