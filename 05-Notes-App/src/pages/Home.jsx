// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

export default function Home() {
  const { notes, deleteNote } = useNotes();

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 All Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet. Click “Create Note” to add one!</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{note.title}</h3>
            <Link to={`/note/${note.id}`}>View</Link>
            <button
              style={{
                marginLeft: "10px",
                background: "red",
                color: "#fff",
                border: "none",
                padding: "5px 8px",
                cursor: "pointer",
              }}
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
