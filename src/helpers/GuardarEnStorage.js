export const GuardarEnStorage = (key, elemento) =>{

    //conseguir elementos que ya estan en localstorage
    let elementos = JSON.parse(localStorage.getItem(key));

    //comprobar si es un array
    if(Array.isArray(elementos)){
      //añadir dentro del array un elemento nuevo
      elementos.push(elemento);
    }else{
        //crear un array con nuevo elemento
        elementos = [elemento];
      }

    //guardar en el localstorage
      localStorage.setItem(key, JSON.stringify(elementos));

    //devolver un objeto
      return elemento;
  }