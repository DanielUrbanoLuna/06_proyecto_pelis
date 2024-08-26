import React, { useState } from 'react'

export const Buscador_series = ({listadoseriesState, setListadoseriesState}) => {

  const [busquedaSerie, setBusquedaSerie] = useState("");
  const [serieNoEncontrada, setSerieNoEncontrada] = useState('false');

  const buscarSerie = (e) => {
    //crear estado y actualizarlo
    setBusquedaSerie(e.target.value);

    //filtrar para buscar coincidencias
    let series_encontradas = listadoseriesState.filter(serie => {
      return serie.titulo.toLowerCase().includes(busquedaSerie.toLowerCase());
    });

    if(busquedaSerie.length <=1 || series_encontradas <= 0) {
      series_encontradas = JSON.parse(localStorage.getItem("series"));
      setSerieNoEncontrada(true);
    } else {
      setSerieNoEncontrada(false);
    }

    //actualizr estado del listado principal con lo logrado filtrar
    setListadoseriesState(series_encontradas);
  }

  return (
    <div className="search">
                <h3 className="title">Buscador se series: {busquedaSerie}</h3>

                {(serieNoEncontrada == true && busquedaSerie.length > 1) && (
                  <span className='noencontrada'>No se ha encontrado ninguna coincidencia con su serie buscada</span>
                )}

                <form>
                    <input type="text" 
                           id="search_field"
                           name='busqueda'
                           autoComplete='off'
                           value={busquedaSerie}
                           onChange={buscarSerie}
                    />
                    <button>Buscar</button>
                </form>
            </div>
  )
}
