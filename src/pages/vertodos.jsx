
// import CartaLibro from '../components/cartaLibro';
import { useEffect, useState } from 'react';
import './vertodos.css'

function Vertodos () {

    const [libros, setLibros] = useState([]);

    function getLibros() {
        fetch("http://localhost:3030/api/libros/")
            .then(results => results.json())
            .then(results => setLibros(results.data))
            .catch(err => console.log(err))
        console.log("Libros" + libros)
    }

    useEffect(() => {
        getLibros();
        console.log("Libros" + libros)
    }, [])

    // {"./uploads/"+(libro.imagen)+".png"}

    return (
        <>
            <ul className="grid">
                {libros.map(libro => (
                    <li key={libro.id} className="card">
                        <h1 className="tituloLibro">{libro.nombre}</h1>
                        <img className="imagenLibro" width="200px" src={"./" + (libro.imagen) + ".png"} alt={libro.nombre} />
                        <p>Por {libro.autorx}</p>
                        <p>Generos: {libro.genero}</p>
                        <p>{libro.sinopsis}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Vertodos;