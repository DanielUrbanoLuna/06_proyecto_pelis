import { useState } from "react";
import { AddPelis } from "./components/AddPelis";
import { AddSeries } from "./components/AddSeries";
import { BuscadorPelis } from "./components/BuscadorPelis";
import { BuscadorSeries } from "./components/BuscadorSeries";
import { ListadoPelis } from "./components/ListadoPelis";
import { ListadoSeries } from "./components/ListadoSeries";
import { ImgCasco } from "./components/ImgCasco";

function App() {

  const [listadopelisState, setListadopelisState] = useState ([]);
  const [listadoseriesState, setListadoseriesState] = useState ([]);

  return (
    
    <div className="layout">
        {/*cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis películas y mis series</h1>
        </header>

        {/*barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Películas</a></li>
                <li><a href="/#">Series</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section className="content-pelis">
            
            {/*aqui van la lista de peliculas*/}
            <div><h2>Estas són tus películas: </h2></div>
            <ListadoPelis listadopelisState={listadopelisState} setListadopelisState={setListadopelisState}/>
        </section>

        <section className="content-series">
            {/*aqui van las series*/}
            <div><h2>Estas són tus series:</h2></div>
            <ListadoSeries listadoseriesState={listadoseriesState} setListadoseriesState={setListadoseriesState}/>
        </section>

            {/*Barra lateral */}
        <aside className="lateral">
            <BuscadorPelis listadopelisState={listadopelisState} setListadopelisState={setListadopelisState}/>

            <BuscadorSeries listadoseriesState={listadoseriesState} setListadoseriesState={setListadoseriesState}/>

            <AddPelis setListadopelisState = {setListadopelisState}/>

            <AddSeries setListadoseriesState = {setListadoseriesState}/>

            <ImgCasco />
           
        </aside>

        {/*pie de página*/}
        <footer className="footer">
            &copy; Perfil de Linkedin - <a href="https://www.linkedin.com/in/daniel-urbano-luna-131274304/">Perfil Linkedin Daniel Urbano  </a>
            &copy; Perfil de Github - <a href="https://github.com/DanielUrbanoLuna">Perfil Github Daniel Urbano</a>

        </footer>

    </div>
    
  );
}

export default App;
