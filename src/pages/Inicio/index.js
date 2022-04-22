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
                        'Time' ganhador do primeiro split se prepara para o MSI
                    </p>
                    <img src={png} id="painIMG" />
               </div>
        </main>
    );
};
