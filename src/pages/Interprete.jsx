import peliculas from "../data/peliculas"
import Card from "../components/Card.jsx"

function Interprete() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 mb-6">Intérpretes Destacados</h1>
      </div>

      <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
      {peliculas.map((pelicula) => 
        pelicula.actores.map((actor, index) =>
          <Card
            key={index}
            nombre={actor.nombre}
            foto={actor.imagen}
            to={`/interpretes/${index}`} >
            {actor.biografia}
          </Card>
        ))}
        </div>
    </>
  )

}

export default Interprete