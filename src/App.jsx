import Contenedor from "./features/Contenedor.jsx"
import Interprete from "./pages/Interprete.jsx"
import Peliculas from "./pages/Peliculas.jsx"
import { Routes } from "react-router-dom"
import {Route} from "react-router-dom"
import Inicio from "./Inicio.jsx"
import Admin from "./pages/Admin.jsx"
import NavBar from "./features/NavBar.jsx" 
import "./assets/styles/index.css";
function App() {
  return (
    <>
            <NavBar></NavBar>

            <Contenedor>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/peliculas" element={<Peliculas />} />
                <Route path="/interprete" element={<Interprete />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </Contenedor>

    </>
  )
}

export default App
