import React from "react";
import '../../estilos/planilha.css'

export default function Planilha(){
    const primeiro = {nome: 'Jean', pontos1: 4, pontos2: 3, pontos3: 3, pontos4: 0}
    const segundo = {nome: 'Pickles', pontos1: 4, pontos2: 3, pontos3: 4, pontos4: 0}
    const terceiro = {nome: 'Relâmpago', pontos1: 3, pontos2: 3, pontos3: 3, pontos4: 0}
    const quarto = {nome: 'Ruanh', pontos1: 3, pontos2: 4, pontos3: 3, pontos4: 0}
    const quinto = {nome: 'Brener', pontos1: 4, pontos2: 1, pontos3: 3, pontos4: 0}
    const sexto = {nome: 'Kennyd', pontos1: 2, pontos2: 4, pontos3: 3, pontos4: 0}
    const setimo = {nome: 'Ademiro', pontos1: 2, pontos2: 5, pontos3: 0, pontos4: 0}
    const oitavo = {nome: 'Victor', pontos1: 0, pontos2: 0, pontos3: 0, pontos4: 0}
    const nono = {nome: 'Tony', pontos1: 2, pontos2: 4, pontos3: 0, pontos4: 0}

    var jean = primeiro.pontos1 + primeiro.pontos2 + primeiro.pontos3 + primeiro.pontos4;


    return(
        <main>
            <div className="topo">
            </div>
            <div className="conteudo">
                <h1>
                    Rodadas
                </h1>
                <div className="planilha">
                    <div className="pRodada">
                        <div>
                            <p>Rodada 1</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td><td id="win">RED</td><td id="win">ITZ</td><td id="win">LIB</td><td>KBM</td><td id="win">LLL</td><td className="destaque">Pontos: {primeiro.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td><td id="win">RED</td><td>RNG</td><td id="win">LIB</td><td id="win">FUR</td><td id="win">LLL</td><td className="destaque">Pontos: {segundo.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td><td>PNG</td><td>RNG</td><td id="win">LIB</td><td id="win">FUR</td><td id="win">LLL</td><td className="destaque">Pontos: {terceiro.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td><td>PNG</td><td>RNG</td><td id="win">LIB</td><td id="win">FUR</td><td id="win">LLL</td><td className="destaque">Pontos: {quarto.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td><td id="win">RED</td><td>RNG</td><td id="win">LIB</td><td id="win">FUR</td><td id="win">LLL</td><td className="destaque">Pontos: {quinto.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td><td>PNG</td><td>RNG</td><td id="win">LIB</td><td>KBM</td><td id="win">LLL</td><td className="destaque">Pontos: {sexto.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td><td>PNG</td><td>RNG</td><td id="win">LIB</td><td>KBM</td><td id="win">LLL</td><td className="destaque">Pontos: {setimo.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td className="destaque">Pontos: {oitavo.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{nono.nome}</td><td>PNG</td><td>RNG</td><td id="win">LIB</td><td>KBM</td><td id="win">LLL</td><td className="destaque">Pontos: {nono.pontos1}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 2</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td><td id="win">FUR</td><td id="win">KBM</td><td id="win">RED</td><td>ITZ</td><td>LLL</td><td className="destaque">Pontos: {primeiro.pontos2}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td><td id="win">FUR</td><td id="win">KBM</td><td id="win">RED</td><td>ITZ</td><td>LLL</td><td className="destaque">Pontos: {segundo.pontos2}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td><td id="win">FUR</td><td id="win">KBM</td><td id="win">RED</td><td>ITZ</td><td>LLL</td><td className="destaque">Pontos: {terceiro.pontos2}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td><td id="win">FUR</td><td id="win">KBM</td><td id="win">RED</td><td>ITZ</td><td id="win">PNG</td><td className="destaque">Pontos: {quarto.pontos2}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td><td>LIB</td><td id="win">KBM</td><td>RNG</td><td>ITZ</td><td>LLL</td><td className="destaque">Pontos: {quinto.pontos2}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td><td id="win">FUR</td><td id="win">KBM</td><td id="win">RED</td><td>ITZ</td><td id="win">PNG</td><td className="destaque">Pontos: {sexto.pontos2}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td><td id="win">FUR</td><td id="win">KBM</td><td id="win">RED</td><td id="win">NET</td><td id="win">PNG</td><td className="destaque">Pontos: {setimo.pontos2}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td className="destaque">Pontos: {oitavo.pontos2}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{nono.nome}</td><td id="win">FUR</td><td id="win">KBM</td><td id="win">RED</td><td>ITZ</td><td id="win">PNG</td><td className="destaque">Pontos: {nono.pontos2}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 3</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td> <td>LLL</td> <td id="win">FUR</td> <td>LIB</td> <td id="win">RED</td> <td id="win">PNG</td> <td className="destaque">Pontos: {primeiro.pontos3}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td> <td id="win">KBM</td> <td id="win">FUR</td> <td>LIB</td> <td id="win">RED</td> <td id="win">PNG</td> <td className="destaque">Pontos: {segundo.pontos3}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td> <td>LLL</td> <td id="win">FUR</td> <td>LIB</td> <td id="win">RED</td> <td id="win">PNG</td> <td className="destaque">Pontos: {terceiro.pontos3}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td> <td>LLL</td> <td id="win">FUR</td> <td>LIB</td> <td id="win">RED</td> <td id="win">PNG</td> <td className="destaque">Pontos: {quarto.pontos3}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td> <td>LLL</td> <td id="win">FUR</td> <td id="win">FLA</td> <td id="win">RED</td> <td>RNG</td> <td className="destaque">Pontos: {quinto.pontos3}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td> <td>LLL</td> <td id="win">FUR</td> <td>LIB</td> <td id="win">RED</td> <td id="win">PNG</td> <td className="destaque">Pontos: {sexto.pontos3}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td className="destaque">Pontos: {setimo.pontos3}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td className="destaque">Pontos: {oitavo.pontos3}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{nono.nome}</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td className="destaque">Pontos: {nono.pontos3}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 4</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td> <td>PT1</td> <td>PT2</td> <td>PT3</td> <td>PT4</td> <td>pt5</td> <td className="destaque">Pontos: {primeiro.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td> <td>PT1</td> <td>PT2</td> <td>PT3</td> <td>PT4</td> <td>pt5</td> <td className="destaque">Pontos: {segundo.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td> <td>PT1</td> <td>PT2</td> <td>PT3</td> <td>PT4</td> <td>pt5</td> <td className="destaque">Pontos: {terceiro.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td> <td>PT1</td> <td>PT2</td> <td>PT3</td> <td>PT4</td> <td>pt5</td> <td className="destaque">Pontos: {quarto.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td> <td>PT1</td> <td>PT2</td> <td>PT3</td> <td>PT4</td> <td>pt5</td> <td className="destaque">Pontos: {quinto.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td> <td>PT1</td> <td>PT2</td> <td>PT3</td> <td>PT4</td> <td>pt5</td> <td className="destaque">Pontos: {sexto.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td> <td>PT1</td> <td>PT2</td> <td>PT3</td> <td>PT4</td> <td>pt5</td> <td className="destaque">Pontos: {setimo.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td> <td>PT1</td> <td>PT2</td> <td>PT3</td> <td>PT4</td> <td>pt5</td> <td className="destaque">Pontos: {oitavo.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{nono.nome}</td> <td>PT1</td> <td>PT2</td> <td>PT3</td> <td>PT4</td> <td>pt5</td> <td className="destaque">Pontos: {nono.pontos4}</td>
                                </tr>
                            </table>
                        </div>
                    </div>









                </div>
            </div>
        </main>
    );
};
