import React from 'react'

export const EditarSerie = ({serie, conseguirseries, setEditarSerie, setListadoseriesState}) => {

    const titulo_serie = "editar serie";

    const guardarEdicionSerie = (e, id) => {
      e.preventDefault();
      
      //conseguir target del evento
      let target = e.target;

      //buscar el indice del objeto de peli a actualizar
      const series_almacenadas = conseguirseries();
      const indiceserie = series_almacenadas.findIndex(serie => serie.id ===id);

      //crear objeto con ese id del indice con titulo y descripcion del formulario
      let serie_actualizada = {
          id,
          titulo: target.titulo.value,
          descripcion: target.descripcion.value
      };

      //actualizar el elemento con ese indice
      series_almacenadas[indiceserie] = serie_actualizada;

      //guardar el nuevo array objetos en localStorage
      localStorage.setItem("series", JSON.stringify(series_almacenadas));

      //actualizar estados
      setListadoseriesState(series_almacenadas);
      setEditarSerie(0);

    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_serie}</h3>
        <form onSubmit={ e => guardarEdicionSerie(e, serie.id)}>
            <input type='text'
                   name='titulo'
                   className='titulo_editado'
                   defaultValue={serie.titulo}/>
            <textarea
                   name='descripcion'
                   defaultValue={serie.descripcion}
                   className='descripcion_editada'/>
            <input type='submit' className='editar' value="Actualizar"/>
        </form>
    </div>
  )
}
