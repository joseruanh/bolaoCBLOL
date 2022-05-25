import React from "react";
import { Link } from "react-router-dom";
import '../../estilos/home.css'
import png from '../../images/png.jpg'

export default function Inicio(){
    return(
        <main>
           <div className="main">
               <div className="veja">
                   <h1>Veja as Rodadas</h1>
                   <Link to='/rodadas'><button className="botaoVER">Ver</button></Link>
               </div>
               <div></div>
           </div>
           <div className="noticia">
                    <p className="tituloNoticia">
                        Red Canids vence primeiro split do cbloiros
                    </p>
                    <iframe src="https://www.youtube.com/embed/HHUbMlMsq48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </main>
    );
};
