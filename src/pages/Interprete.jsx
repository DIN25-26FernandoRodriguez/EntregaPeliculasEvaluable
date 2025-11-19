import peliculas from "../data/peliculas.js"
import Card from "../features/Card"

function Interprete() {

return (
    <>

    <div>
      <h1 className="contenedor__h1">Interpretes destacados</h1>
    </div>
    
    {peliculas.map((pelicula) => //Recorrer películas
              pelicula.actores.map((actor, index) => //Recorrer cada actor
                <Card
                  key={index}
                  nombre={actor.nombre}
                  foto={actor.imagen} >
                  {actor.biografia}
                </Card>
              ))}
    </>
)

}

export default Interprete

