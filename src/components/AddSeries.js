import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const AddSeries = ({setListadoseriesState}) => {

  const tituloComponente = "Añadir serie";
  const [serieState, setserieState] = useState({
    titulo: "",
    descripcion: ""
  });

  const {titulo, descripcion} = serieState;

  const conseguirDatosForm = e =>{
    e.preventDefault();//evita refresco de la pagina, para conseguir app reactiva

    //conseguir datos del formulario
    let target= e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //crear objeto donde guardar la informacion de la serie
    let serie = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

      //guardar estado y que se muestre
    setserieState(serie);

    //actualizar estado actual del listado
    setListadoseriesState(elementos =>{
      return [...elementos, serie];
    });

      //guardar en almacenamiento local
    GuardarEnStorage("series", serie);

  }

  return (
    <div className="add">
                <h3 className="title">{tituloComponente}</h3>

               <strong>{(titulo && descripcion) && "Has añadido la serie "+ titulo}</strong>

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
