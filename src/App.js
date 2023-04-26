import { useState } from 'react'
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
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Login from './component/Login';
import SignUp from './component/SignUp';
import Alert from './component/Alert';



function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => setAlert(null), 3000)
  }
  return (
    <>
      <NoteState>
        <R>
          <Navabar />

          <div style={{ height: "50px", zIndex: 1,width: "100%"}} className='position-fixed'>
            <Alert alert={alert} />
          </div>

          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/about" element={<About showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup" element={<SignUp showAlert={showAlert} />} />
          </Routes>
        </R>
      </NoteState>
    </>
  );
}

export default App;
