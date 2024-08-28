import React, { useEffect, useState } from 'react'
import { EditarSerie } from './EditarSerie';

export const ListadoSeries = ({listadoseriesState, setListadoseriesState}) => {

    //const [listadoseriesState, setListadoseriesState] = useState ([]);

    const[editarSerie, setEditarSerie] = useState(0);

    useEffect(() => {

        console.log("componente de lista series cargado:");
        conseguirseries();

    },[]);

    const conseguirseries = () => {
        let series = JSON.parse(localStorage.getItem("series"));

        setListadoseriesState(series);

        return series;
    }

    const borrarSerie = (id) => {
        //conseguir series almacenadas
        let series_almacenadas = conseguirseries();

        //filtrar series para eliminar del array la que no quiera
        let nuevo_array_series = series_almacenadas.filter(serie => serie.id !== parseInt(id));

        //actualizar estado del listado
        setListadoseriesState(nuevo_array_series);

        //actualizar datos en el localStorage
        localStorage.setItem("series", JSON.stringify(nuevo_array_series));
    }

  return (
        
    <>
        
        {listadoseriesState != null ? 
            listadoseriesState.map(serie=>{

            return(
            <article key={serie.id} className="serie-item">
            <h3 className="title">{serie.titulo}</h3>
            <p className="description">{serie.descripcion}</p>

            <button className="edit" onClick={() => setEditarSerie(serie.id)}>Editar</button>
            <button className="delete" onClick={ () => borrarSerie(serie.id)}>Borrar</button>

            {/*Aparece formulario para editar*/}
            {editarSerie === serie.id && (
                <EditarSerie serie={serie}
                              conseguirseries = {conseguirseries}
                              setEditarSerie = {setEditarSerie}
                              setListadoseriesState = {setListadoseriesState}
                />
            )}

        </article>
            );

        })
            : <h2>No hay películas que mostrar...
                Añade la primera
            </h2>
    }
     
    </>
  )
}
