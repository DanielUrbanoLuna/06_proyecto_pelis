import { useState } from "react";
import { AddPelis } from "./components/AddPelis";
import { AddSeries } from "./components/AddSeries";
import { Buscador_pelis } from "./components/Buscador_pelis";
import { Buscador_series } from "./components/Buscador_series";
import { Listado_Pelis } from "./components/Listado_Pelis";
import { Listado_Series } from "./components/Listado_Series";
import { Img_casco } from "./components/Img_casco";

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
            <Listado_Pelis listadopelisState={listadopelisState} setListadopelisState={setListadopelisState}/>
        </section>

        <section className="content-series">
            {/*aqui van las series*/}
            <Listado_Series listadoseriesState={listadoseriesState} setListadoseriesState={setListadoseriesState}/>
        </section>

            {/*Barra lateral */}
        <aside className="lateral">
            <Buscador_pelis listadopelisState={listadopelisState} setListadopelisState={setListadopelisState}/>

            <Buscador_series listadoseriesState={listadoseriesState} setListadoseriesState={setListadoseriesState}/>

            <AddPelis setListadopelisState = {setListadopelisState}/>

            <AddSeries setListadoseriesState = {setListadoseriesState}/>

            <Img_casco />
           
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
