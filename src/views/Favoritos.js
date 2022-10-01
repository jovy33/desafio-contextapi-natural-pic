import "../assets/css/galeria.css";
import MyContext from "../my_context";
import { useContext } from "react";

export default function Favoritos() {
  const { fotos } = useContext(MyContext)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {fotos.filter(filtrado => filtrado.liked).map((foto, i) => (
        <div
          className="foto"
          style={{ backgroundImage: `url(${foto.src.tiny})` }}
          key={i}
        >
        </div>
      ))}
      </div>
    </div>
  );
}
