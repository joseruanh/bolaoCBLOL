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
            <p className="tituloNoticia">Zé Ruã ganha bolão e recebe um enorme parabéns</p>
            <table class="tabelaCBLOL">
                <tr class="time">
                    <td class="destaque1">1</td><td>Ruanh</td><td class="destaque">67 pontos</td>
                </tr>
                <tr class="time">
                    <td class="destaque1">2</td><td>Jean</td><td class="destaque">63 pontos</td>
                </tr>
                <tr class="time">
                    <td class="destaque1">3</td><td>Mr Pickles</td><td class="destaque">62 pontos</td>
                </tr>
                <tr class="time">
                    <td class="destaque1">4</td><td>Relâmpago</td><td class="destaque">62 pontos</td>
                </tr>
                <tr class="time">
                    <td class="destaque1">5</td><td>Kennyd</td><td class="destaque">60 pontos</td>
                </tr>
                <tr class="time">
                    <td class="destaque1">6</td><td>Tony</td><td class="destaque">52 pontos</td>
                </tr>
                <tr class="time">
                    <td class="destaque1">7</td><td>Brener</td><td class="destaque">50 pontos</td>
                </tr>
                <tr class="time">
                    <td class="destaque1">8</td><td>Ademiro</td><td class="destaque">43 pontos</td>
                </tr>
            </table>

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
                    <p>Redes sociais lolEsportsBr:</p>
                </div>

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
