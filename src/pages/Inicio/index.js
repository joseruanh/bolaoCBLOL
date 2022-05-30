import React from "react";
import { Link } from "react-router-dom";
import '../../estilos/home.css'
import rng from '../../images/rng-champs.jpg'
import lol from '../../images/lolesports.jpg'
import yt from '../../images/yt.png'
import insta from '../../images/insta.webp'
import red from '../../images/red.jpg'

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
                        RNG vence a T1 e se torna tricampeã do MSI
                    </p>
                    <img src={rng} id="rng"/>
            </div>

           <div className="noticia">
                    <p className="tituloNoticia">
                        Red Canids vence primeiro split do cbloiros
                    </p>
                    <img src={red} id="red"/>
            </div>

            <div className="footer">
                <div className="footerdiv">
                    <a href="https://lolesports.com/" target="_blank"><img src={lol} id="lolesports" /></a>
                </div>
                <div className="footerdiv">
                    <a href="https://www.youtube.com/c/CBLOL" target="_blank"><img src={yt} id="youtube"/></a>
                </div>
                <div className="footerdiv">
                    <a href="https://www.instagram.com/lolesportsbr/" target="_blank"><img src={insta} id="instagram" /></a>
                </div>
            </div>
        </main>
    );
};
