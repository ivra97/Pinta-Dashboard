import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Baneos from './components/Baneos/Baneos';
import Error from './components/Error/Error';


function App() {                /*codigo js llega hasta el return, luego de eso es html, pero se llama jsx porque es una mezcla de ambos*/

  return (
    <>
      <BrowserRouter>

        <Navbar> </Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users/:idUser/:userName" element={<Users />} />
          <Route exact path="/baneos" element={<Baneos />} />
          <Route exact path="error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
