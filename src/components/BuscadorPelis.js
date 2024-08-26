import React, { useState } from 'react'

export const BuscadorPelis = ({listadopelisState, setListadopelisState}) => {

  const [busquedaPeli, setBusquedaPeli] = useState("");
  const [peliNoEncontrada, setPeliNoEncontrada] = useState('false');

  const buscarPeli = (e) => {
    //crear estado y actualizarlo
    setBusquedaPeli(e.target.value);

    //filtrar para buscar coincidencias
    let pelis_encontradas = listadopelisState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busquedaPeli.toLowerCase());
    });

    if(busquedaPeli.length <=1 || pelis_encontradas <=0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setPeliNoEncontrada(true);
    } else{
      setPeliNoEncontrada(false);
    }

    //actualizr estado del listado principal con lo logrado filtrar
    setListadopelisState(pelis_encontradas);
  }

  return (
    <div className="search">
                <h3 className="title">Buscador de peliculas: {busquedaPeli}</h3>

                {(peliNoEncontrada == true && busquedaPeli.length > 1) &&(
                  <span className='noencontrada'>No se ha encontrado ninguna coincidencia con su película buscada</span>
                )}
                
                <form>
                    <input type="text" 
                           id="search_field"
                           name='busqueda'
                           autoComplete='off'
                           value={busquedaPeli}
                           onChange={buscarPeli}
                    />
                    <button>Buscar</button>
                </form>
            </div>
  )
}
