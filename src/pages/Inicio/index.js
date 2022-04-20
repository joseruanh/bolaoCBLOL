import React from "react";
import { Link } from "react-router-dom";
import '../../estilos/home.css'

export default function Inicio(){
    return(
        <main>
           <div className="main">
               <div className="veja">
                   <h1>Veja as Rodadas</h1>
                   <Link to='/rodadas'><button className="botaoVER">Rodadas</button></Link>
               </div>
               <div></div>
           </div>
        </main>
    );
};
