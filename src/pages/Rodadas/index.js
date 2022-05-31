import React from "react";
import '../../estilos/rodadas.css'
import fla from './logos/fla.png'
import fur from './logos/fur.png'
import itz from './logos/itz.png'
import kbm from './logos/kbm.png'
import lib from './logos/lib.png'
import lll from './logos/lll.png'
import net from './logos/net.png'
import png from './logos/png.png'
import red from './logos/red.png'
import rng from './logos/rng.png'
import vs from './logos/vs.png'

export default function Rodadas(){
    return(
        <main>
            <div className="inicio">

            </div>
            <div className="titulo">
                <p>Rodadas do CBLOL</p>
            </div>
            <div className="jogos">
                <div className="rodada">
                    <p>rodada 1</p>

                    <div className="partida">
                        <div> <img src={png} className="logo"/> </div>
                        <div> <img src={vs} className="logo" /> </div>
                        <div> <img src={red} className="logo" /> </div>
                    </div>

                    <div className="partida">
                        <div> <img src={itz} className="logo"/> </div>
                        <div> <img src={vs} className="logo" /> </div>
                        <div> <img src={rng} className="logo" /> </div>
                    </div>

                    <div className="partida">
                        <div> <img src={lib} className="logo"/> </div>
                        <div> <img src={vs} className="logo" /> </div>
                        <div> <img src={net} className="logo" /> </div>
                    </div>

                    <div className="partida">
                        <div> <img src={fur} className="logo"/> </div>
                        <div> <img src={vs} className="logo" /> </div>
                        <div> <img src={kbm} className="logo" /> </div>
                    </div>

                    <div className="partida">
                        <div> <img src={fla} className="logo"/> </div>
                        <div> <img src={vs} className="logo" /> </div>
                        <div> <img src={lll} className="logo" /> </div>
                    </div>

                </div>

                <div className="rodada">
                    <p>rodada 2</p>

                    <div className="partida">
                        <div> <img src={fur} className="logo"/> </div>
                        <div> <img src={vs} className="logo" /> </div>
                        <div> <img src={lib} className="logo" /> </div>
                    </div>

                    <div className="partida">
                        <div> <img src={kbm} className="logo"/> </div>
                        <div> <img src={vs} className="logo" /> </div>
                        <div> <img src={fla} className="logo" /> </div>
                    </div>

                    <div className="partida">
                        <div> <img src={rng} className="logo"/> </div>
                        <div> <img src={vs} className="logo" /> </div>
                        <div> <img src={red} className="logo" /> </div>
                    </div>

                    <div className="partida">
                        <div> <img src={net} className="logo"/> </div>
                        <div> <img src={vs} className="logo" /> </div>
                        <div> <img src={itz} className="logo" /> </div>
                    </div>

                    <div className="partida">
                        <div> <img src={lll} className="logo"/> </div>
                        <div> <img src={vs} className="logo" /> </div>
                        <div> <img src={png} className="logo" /> </div>
                    </div>

                </div>

            </div>
        </main>
    );
};
