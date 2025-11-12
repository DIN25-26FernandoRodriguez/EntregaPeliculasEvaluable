import Contenedor from './Contenedor'
import Interprete from './Interprete'
import peliculas from './data/peliculas.js'

function App() {

  return (
    <>
      <h1 className="contenedor__h1 items-center text-center">Mis Intérpretes</h1>  
      <p className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-color-primary text-2xl tracking-[0] leading-[normal] whitespace-nowrap items-center text-center pt-2">Lista de interpretes disponibles:</p>
<Contenedor>
  <div className="flex justify-center items-center pt-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      
      {peliculas.map((pelicula) =>
        pelicula.actores.map((actor, index) => (
          <Interprete key={actor.nombre} nombre={actor.nombre} foto={actor.imagen}>
            {actor.biografia}
          </Interprete>
        ))
      )} 
    </div>
  </div>
</Contenedor>
    </>
  )
}

export default App
