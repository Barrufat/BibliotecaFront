
import { useEffect, useState } from 'react';
import './vertodos.css'
import axios from 'axios';
import Modal from '../components/modal';

import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Vertodos() {
    const [libros, setLibros] = useState([]);
    const [searchText, setSearchTExt] = useState("");
    const [searchText2, setSearchTExt2] = useState("");
    const [buscar, setBuscar] = useState("");
    const [modal, setModal] = useState(false);

    const getLibros = async () => {
        try {
            const response = await axios.get("https://biblioapi2-production.up.railway.app/api/libros/" + buscar);
            setLibros(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getLibros();
    }, [buscar])

    useEffect(() => {
        console.log('Libros: ' + JSON.stringify(libros));
    }, [libros])


    const handleSubmit = (e) => {
        e.preventDefault();
        setBuscar("nombre/" + searchText);
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        setBuscar("autorx/" + searchText2);
    }

    function eliminarLibro(e) {
        axios.delete("https://biblioapi2-production.up.railway.app/api/libros/" + e.id)
            .then(res => {
                console.log(res.data)
                getLibros();
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [displayText, setDisplayText] = useState('textoClosed');
    const [toggleText, setToggleText] = useState(false);

    const switchText = () => {
        setToggleText(!toggleText)
    }

    useEffect(() => {
        if (toggleText) {
            setDisplayText("textoLibroBib")
        } else {
            setDisplayText('textoClosed')
        }
    }, [toggleText])

    function eliminarLibro() {
        setModal(true);
    }

    const cerrarModal = (estado) => {
        setModal(estado);
    }

    return (
        <div className='gridContainer'>
            <div className="formulario" id="formulario">
                <form onSubmit={handleSubmit}>
                    <input className="input2"
                        placeholder=" Buscar por nombre"
                        type="text" value={searchText}
                        onChange={(e) => setSearchTExt(e.target.value)}></input>
                    <button className="buscarLibro" type="submit">Buscar</button>
                </form>
                <br />
                <form onSubmit={handleSubmit2}>
                    <input className="input2"
                        placeholder=" Buscar por autorx"
                        type="text" value={searchText2}
                        onChange={(e) => setSearchTExt2(e.target.value)}></input>
                    <button className="buscarLibro" type="submit">Buscar</button>
                </form>
            </div>
            <ul className="grid" id="grid">
                {libros.map(libro => (
                    <LazyLoadComponent effect="blur">
                        <li key={libro.id} className="card">
                            <h1 className="tituloLibro">{libro.nombre}</h1>
                            <img className="imagenLibro" src={"./" + (libro.imagen) + ".png"} alt={libro.nombre} onClick={switchText} />
                            <h3 className="autorLibro">{libro.autorx}</h3>
                            <h4 className="generoLibro">Generos: {libro.genero}</h4>
                            <p className={displayText}>{libro.sinopsis}</p>
                            <h1 className="tituloLibro">{libro.casilla}</h1>
                            <button className='eliminarLibro' onClick={() => eliminarLibro(libro)}>Eliminar</button>
                        </li>
                    </LazyLoadComponent>
                ))}
            </ul>
            <Modal estado={modal} cambiarEstado={cerrarModal} >
                <h3 className='tituloCasilla'>Función deshabilitada para este prototipo</h3>
            </Modal>
        </div>
    );
}

export default Vertodos;