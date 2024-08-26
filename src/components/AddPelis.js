import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const AddPelis = ({setListadopelisState}) => {

  const tituloComponente = "Añadir película";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: ""
  });

  const {titulo, descripcion} = peliState;

  const conseguirDatosForm = e =>{
    e.preventDefault();//evita refresco de la pagina, para conseguir app reactiva

    //conseguir datos del formulario
    let target= e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //crear objeto donde guardar la informacion de la pelicula
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

      //guardar estado y que se muestre
    setPeliState(peli);

    //actualizar estado actual del listado
    setListadopelisState(elementos =>{
      return [...elementos, peli];
    });

      //guardar en almacenamiento local
    GuardarEnStorage("pelis", peli);

  }

  return (
    <div className="add">
                <h3 className="title">{tituloComponente}</h3>

               <strong>{(titulo && descripcion) && "Has añadido la pelicula "+ titulo}</strong>

                <form onSubmit={conseguirDatosForm}>
                    <input type="text"
                           id="titulo"
                           placeholder="Título" />
                    
                    <textarea id="descripcion" 
                              name='descripcion'
                              placeholder="Descripcion"></textarea>
                    
                    <input type="submit" 
                           id="save" 
                           value="Guardar" />
                </form>
            </div>
  )
}
