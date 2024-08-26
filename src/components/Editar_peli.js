import React from 'react'

export const Editar_peli = ({peli, conseguirPeliculas, setEditarPeli, setListadopelisState}) => {

    const titulo_peli = "editar pelicula";

    const guardarEdicionPeli = (e, id) => {
      e.preventDefault();
      
      //conseguir target del evento
      let target = e.target;

      //buscar el indice del objeto de peli a actualizar
      const pelis_almacenadas = conseguirPeliculas();
      const indicepeli = pelis_almacenadas.findIndex(peli => peli.id === id);
      
      //crear objeto con ese id del indice con titulo y descripcion del formulario
      let peli_actualizada = {
          id,
          titulo: target.titulo.value,
          descripcion: target.descripcion.value
      };

      //actualizar el elemento con ese indice
      pelis_almacenadas[indicepeli] = peli_actualizada;

      //guardar el nuevo array objetos en localStorage
      localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

      //actualizar estados
      setListadopelisState(pelis_almacenadas);
      setEditarPeli(0);

    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_peli}</h3>
        <form onSubmit={e => guardarEdicionPeli(e, peli.id)}>
            <input type='text'
                   name='titulo'
                   className='titulo_editado'
                   defaultValue={peli.titulo}/>
            <textarea
                   name='descripcion'
                   defaultValue={peli.descripcion}
                   className='descripcion_editada'/>
            <input type='submit' className='editar' value="Actualizar"/>

        </form>
    </div>
  )
}
