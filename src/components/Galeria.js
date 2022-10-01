import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../my_context";
import { useContext } from "react";

export default function Home() {
  const { fotos, setFotos } = useContext(MyContext)

  const setFavorito = (id) => {
    // Buscamos la foto segun id
    fotos.map(foto => {
      if (foto.id == id) {
        // marcamos y desmarcamos like.
        foto.liked = !foto.liked
      }
    })
    setFotos([...fotos])
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto, i) => (
        <div
          className="foto"
          onClick={() => setFavorito(foto.id)}
          style={{ backgroundImage: `url(${foto.src.tiny})` }}
          key={i}
        >
          <Heart filled={foto.liked} />
          <p>{foto.alt}</p>
        </div>
      ))}
    </div>
  );
}
