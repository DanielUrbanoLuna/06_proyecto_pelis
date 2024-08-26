import React, { useEffect, useState } from 'react'
import { EditarPeli } from './EditarPeli';

export const ListadoPelis = ({listadopelisState, setListadopelisState}) => {

    //const [listadopelisState, setListadopelisState] = useState ([]);

    const [editarPeli, setEditarPeli] = useState(0);

    useEffect(() => {

        console.log("componente de lista pelis cargado:");
        conseguirPeliculas();

    },[]);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadopelisState(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) => {
        //conseguir series almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //filtrar series para eliminar del array la que no quiera
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        //actualizar estado del listado
        setListadopelisState(nuevo_array_pelis);

        //actualizar datos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
    }

  return (
    <>
        {listadopelisState != null ? 
            listadopelisState.map(peli=>{

            return(
            <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button className="edit" onClick={() => setEditarPeli(peli.id)}>Editar</button>          
            <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

            {/*Aparece formulario para editar*/}
            {editarPeli === peli.id &&(

                <EditarPeli peli={peli}
                             conseguirPeliculas = {conseguirPeliculas}
                             setEditarPeli = {setEditarPeli}
                             setListadopelisState = {setListadopelisState}
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
