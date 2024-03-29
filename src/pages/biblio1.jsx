import { useState, useEffect } from 'react';
import './biblio1.css'
import axios from 'axios';
import { Link } from "react-router-dom";
import Modal from '../components/modal';

function Biblio1() {
  const [casilla, setCasilla] = useState("A0");
  const [libros, setLibros] = useState([]);
  const [modal, setModal] = useState(false);

  const URL = ("https://biblioapi2-production.up.railway.app/api/libros/casilla/" + casilla);

  const getLibros = async () => {
    try {
      const response = await axios.get(URL);
      setLibros(response.data);
    } catch (err) {
      setLibros([])
      console.log(err);
    }
  }

  useEffect(() => {
    getLibros();
  }, [casilla])

  // function eliminarLibro(e) {
  //   axios.delete("https://biblioapi2-production.up.railway.app/api/libros" + e.id)
  //     .then(res => {
  //       console.log(res.data)
  //       getLibros();
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  function eliminarLibro () {
    setModal(true);
  }

  const cerrarModal = (estado) => {
    setModal(estado);
  }

  function CasillaGrande() {
    const [displayText, setDisplayText] = useState ('textoClosed');
    const [toggleText, setToggleText] = useState (false);

    const switchText = () => {
      setToggleText(!toggleText)
    }

    useEffect(() => {
      if(toggleText){
        setDisplayText("textoLibroBib")
      } else {
        setDisplayText('textoClosed')
      }
    }, [toggleText])
    

    return (
      <div className="casillaGrande">
        <h1 className="tituloCasilla">Casilla {casilla}</h1>
        <ul className="gridBib1">
          {libros.map(libro => (
            <li key={libro.id} className="cardBib">
              <h1 className="tituloLibroBib">{libro.nombre}</h1>
              <img className="imagenLibroBib" src={"./" + (libro.imagen) + ".png"} alt={libro.nombre} onClick={switchText} />
              <h3 className="autorLibroBib">{libro.autorx}</h3>
              <h4 className="generoLibroBib">Generos: {libro.genero}</h4>
              <p className={displayText}>{libro.sinopsis}</p>
              <button className='eliminarLibroBib' onClick={() => eliminarLibro()}>Eliminar</button>
            </li>
          ))}
        </ul>
        <Modal estado={modal} cambiarEstado={cerrarModal} >
          <h3 className='tituloCasilla'>Función deshabilitada para este prototipo</h3>
        </Modal>
      </div>
    )
  }

  // if (!libros.length) {
  //   return (<>no data</>)
  // }


  return (
    <div className="containerBib1">
      <div className="libreria1">
        <div className="columnA">
          <div className="casilla">
            <img className="imagen" src="./A1.png" alt="A1" />
            <img className="imagen" src="./H_A1.png" alt="H_A1" onClick={() => setCasilla("A1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./A2.png" alt="A2" />
            <img className="imagen" src="./H_A2.png" alt="H_A2" onClick={() => setCasilla("A2")} />
          </div>
          <img className="casilla" src="./A3.png" alt="A3" />
          <img className="casilla" src="./A4.png" alt="A4" />
          <img className="casilla" src="./A5.png" alt="A5" />
          <img className="casilla" src="./A6.png" alt="A6" />
          <img className="casilla" src="./A7.png" alt="A7" />
          <img className="casilla" src="./A8.png" alt="A8" />
          <img className="casilla" src="./A9.png" alt="A9" />
          <img className="casilla" src="./A10.png" alt="A10" />
        </div>
        <div className="columnB">
          <div className="casilla">
            <img className="imagen" src="./B1.png" alt="B1" />
            <img className="imagen" src="./H_B1.png" alt="H_B1" onClick={() => setCasilla("B1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./B2.png" alt="B2" />
            <img className="imagen" src="./H_B2.png" alt="H_B2" onClick={() => setCasilla("B2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./B3.png" alt="B3" />
            <img className="imagen" src="./H_B3.png" alt="H_B3" onClick={() => setCasilla("B3")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./B4.png" alt="B4" />
            <img className="imagen" src="./H_B4.png" alt="H_B4" onClick={() => setCasilla("B4")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./B5.png" alt="B5" />
            <img className="imagen" src="./H_B5.png" alt="H_B5" onClick={() => setCasilla("B5")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./B6.png" alt="B6" />
            <img className="imagen" src="./H_B6.png" alt="H_B6" onClick={() => setCasilla("B6")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./B7.png" alt="B7" />
            <img className="imagen" src="./H_B7.png" alt="H_B7" onClick={() => setCasilla("B7")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./B8.png" alt="B8" />
            <img className="imagen" src="./H_B8.png" alt="H_B8" onClick={() => setCasilla("B8")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./B9.png" alt="B9" />
            <img className="imagen" src="./H_B9.png" alt="H_B9" onClick={() => setCasilla("B9")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./B10.png" alt="B10" />
            <img className="imagen" src="./H_B10.png" alt="H_B10" onClick={() => setCasilla("B10")} />
          </div>
        </div>
        <div className="columnC">
          <div className="casilla">
            <img className="imagen" src="./C1.png" alt="C1" />
            <img className="imagen" src="./H_C1.png" alt="H_C1" onClick={() => setCasilla("C1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./C2.png" alt="C2" />
            <img className="imagen" src="./H_C2.png" alt="H_C2" onClick={() => setCasilla("C2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./C3.png" alt="C3" />
            <img className="imagen" src="./H_C3.png" alt="H_C3" onClick={() => setCasilla("C3")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./C4.png" alt="C4" />
            <img className="imagen" src="./H_C4.png" alt="H_C4" onClick={() => setCasilla("C4")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./C5.png" alt="C5" />
            <img className="imagen" src="./H_C5.png" alt="H_C5" onClick={() => setCasilla("C5")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./C6.png" alt="C6" />
            <img className="imagen" src="./H_C6.png" alt="H_C6" onClick={() => setCasilla("C6")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./C7.png" alt="C7" />
            <img className="imagen" src="./H_C7.png" alt="H_C7" onClick={() => setCasilla("C7")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./C8.png" alt="C8" />
            <img className="imagen" src="./H_C8.png" alt="H_C8" onClick={() => setCasilla("C8")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./C9.png" alt="C9" />
            <img className="imagen" src="./H_C9.png" alt="H_C9" onClick={() => setCasilla("C9")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./C10.png" alt="C10" />
            <img className="imagen" src="./H_C10.png" alt="H_C10" onClick={() => setCasilla("C10")} />
          </div>
        </div>
        <div className="columnD">
          <div className="casilla">
            <img className="imagen" src="./D1.png" alt="D1" />
            <img className="imagen" src="./H_D1.png" alt="H_D1" onClick={() => setCasilla("D1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./D2.png" alt="D2" />
            <img className="imagen" src="./H_D2.png" alt="H_D2" onClick={() => setCasilla("D2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./D3.png" alt="D3" />
            <img className="imagen" src="./H_D3.png" alt="H_D3" onClick={() => setCasilla("D3")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./D4.png" alt="D4" />
            <img className="imagen" src="./H_D4.png" alt="H_D4" onClick={() => setCasilla("D4")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./D5.png" alt="D5" />
            <img className="imagen" src="./H_D5.png" alt="H_D5" onClick={() => setCasilla("D5")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./D6.png" alt="D6" />
            <img className="imagen" src="./H_D6.png" alt="H_D6" onClick={() => setCasilla("D6")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./D7.png" alt="D7" />
            <img className="imagen" src="./H_D7.png" alt="H_D7" onClick={() => setCasilla("D7")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./D8.png" alt="D8" />
            <img className="imagen" src="./H_D8.png" alt="H_D8" onClick={() => setCasilla("D8")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./D9.png" alt="D9" />
            <img className="imagen" src="./H_D9.png" alt="H_D9" onClick={() => setCasilla("D9")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./D10.png" alt="D10" />
            <img className="imagen" src="./H_D10.png" alt="H_D10" onClick={() => setCasilla("D10")} />
          </div>
        </div>
        <div className="columnE">
          <div className="casilla">
            <img className="imagen" src="./E1.png" alt="E1" />
            <img className="imagen" src="./H_E1.png" alt="H_E1" onClick={() => setCasilla("E1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./E2.png" alt="E2" />
            <img className="imagen" src="./H_E2.png" alt="H_E2" onClick={() => setCasilla("E2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./E3.png" alt="E3" />
            <img className="imagen" src="./H_E3.png" alt="H_E3" onClick={() => setCasilla("E3")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./E4.png" alt="E4" />
            <img className="imagen" src="./H_E4.png" alt="H_E4" onClick={() => setCasilla("E4")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./E5.png" alt="E5" />
            <img className="imagen" src="./H_E5.png" alt="H_E5" onClick={() => setCasilla("E5")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./E6.png" alt="E6" />
            <img className="imagen" src="./H_E6.png" alt="H_E6" onClick={() => setCasilla("E6")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./E7.png" alt="E7" />
            <img className="imagen" src="./H_E7.png" alt="H_E7" onClick={() => setCasilla("E7")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./E8.png" alt="E8" />
            <img className="imagen" src="./H_E8.png" alt="H_E8" onClick={() => setCasilla("E8")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./E9.png" alt="E9" />
            <img className="imagen" src="./H_E9.png" alt="H_E9" onClick={() => setCasilla("E9")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./E10.png" alt="E10" />
            <img className="imagen" src="./H_E10.png" alt="H_E10" onClick={() => setCasilla("E10")} />
          </div>
        </div>
        <div className="columnF">
          <div className="casilla">
            <img className="imagen" src="./F1.png" alt="F1"/>
            <img className="imagen" src="./H_F1.png" alt="H_F1" onClick={() => setCasilla("F1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./F2.png" alt="F2" />
            <img className="imagen" src="./H_F2.png" alt="H_F2" onClick={() => setCasilla("F2")} />
          </div>
          <img className="casilla" src="./F3.png" alt="F3" />
          <img className="casilla" src="./F4.png" alt="F4" />
          <img className="casilla" src="./F5.png" alt="F5" />
          <img className="casilla" src="./F6.png" alt="F6" />
          <img className="casilla" src="./F7.png" alt="F7" />
          <img className="casilla" src="./F8.png" alt="F8" />
          <img className="casilla" src="./F9.png" alt="F9" />
        </div>
        <div className="biblioPeque">
          <Link className="biblio" to="/biblio2">
            <img width="300px" src="./biblio2.png" alt="biblio2" />
            <img width="300px" src="./H_biblio2.png" alt="H_biblio2" />
          </Link>
        </div>

        <div className="columnLast">
          <CasillaGrande />
        </div>
      </div>
    </div>



  );
}

export default Biblio1;