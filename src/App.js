import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Visit from './Visit';
import Main from './Main';
import Notfound from './Notfound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Main />} />

       <Route path="/visit/:id" element={<Visit />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
