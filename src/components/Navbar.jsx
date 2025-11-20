import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
    // bg-[var(--colorNavBar)]
      className="w-full bg-[var(--colorNavBar)] text-black p-4 shadow-lg flex justify-center gap-8"
      aria-label="Barra de navegación"
    >
      <Link to="/">Inicio</Link>
      <Link to="/peliculas">Películas</Link>
      <Link to="/interpretes">Intérpretes</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
