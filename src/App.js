
import './App.css';
import {
  BrowserRouter as R,
  Routes,
  Route
} from "react-router-dom";
import Navabar from './component/Navabar';
import Home from './component/Home';
import About from './component/About';
import NoteState from './context/Notes/notesState';




function App() {
  return (
    <>
    <NoteState>
      <R>
        <Navabar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </R>
      </NoteState>
    </>
  );
}

export default App;
