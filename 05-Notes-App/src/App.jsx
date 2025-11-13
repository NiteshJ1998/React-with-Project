// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import ViewNote from "./pages/ViewNote";
import { NotesProvider } from "./context/NotesContext";

function App() {
  return (
    <NotesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/note/:id" element={<ViewNote />} />
        </Routes>
      </Router>
    </NotesProvider>
  );
}

export default App;
