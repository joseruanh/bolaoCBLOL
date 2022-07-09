import React from "react";
import '../../estilos/planilha.css'

export default function Planilha(){
    const primeiro = {nome: 'Jean', pontos1: 4, pontos2: 3, pontos3: 3, pontos4: 3, 
    pontos5: 3, pontos6: 4, pontos7: 3, pontos8: 4, pontos9: 4, pontos10: 0}
    const segundo = {nome: 'Pickles', pontos1: 4, pontos2: 3, pontos3: 4, pontos4: 5, 
    pontos5: 3, pontos6: 3, pontos7: 3, pontos8: 5, pontos9: 3, pontos10: 0}
    const terceiro = {nome: 'Relâmpago', pontos1: 3, pontos2: 3, pontos3: 3, pontos4: 3, 
    pontos5: 3, pontos6: 3, pontos7: 4, pontos8: 5, pontos9: 3, pontos10: 0}
    const quarto = {nome: 'Ruanh', pontos1: 3, pontos2: 4, pontos3: 3, pontos4: 4, 
    pontos5: 3, pontos6: 3, pontos7: 4, pontos8: 5, pontos9: 4, pontos10: 0}
    const quinto = {nome: 'Brener', pontos1: 4, pontos2: 1, pontos3: 3, pontos4: 3, 
    pontos5: 2, pontos6: 1, pontos7: 3, pontos8: 3, pontos9: 2, pontos10: 0}
    const sexto = {nome: 'Kennyd', pontos1: 2, pontos2: 4, pontos3: 3, pontos4: 0, 
    pontos5: 3, pontos6: 3, pontos7: 4, pontos8: 5, pontos9: 4, pontos10: 0}
    const setimo = {nome: 'Ademiro', pontos1: 2, pontos2: 5, pontos3: 0, pontos4: 2, 
    pontos5: 2, pontos6: 3, pontos7: 3, pontos8: 3, pontos9: 0, pontos10: 0}
    const oitavo = {nome: 'Tony', pontos1: 2, pontos2: 4, pontos3: 0, pontos4: 3, 
    pontos5: 0, pontos6: 3, pontos7: 4, pontos8: 4, pontos9: 3, pontos10: 0}

    var jean = primeiro.pontos1 + primeiro.pontos2 + primeiro.pontos3 + primeiro.pontos4 + primeiro.pontos5 + primeiro.pontos6 + primeiro.pontos7 + primeiro.pontos8 + primeiro.pontos9 + primeiro.pontos10;
    var pickles = segundo.pontos1 + segundo.pontos2 + segundo.pontos3 + segundo.pontos4 + segundo.pontos5 + segundo.pontos6 + segundo.pontos7 + segundo.pontos8 + segundo.pontos9 + segundo.pontos10;
    var relampago = terceiro.pontos1 + terceiro.pontos2 + terceiro.pontos3 + terceiro.pontos4 + terceiro.pontos5 + terceiro.pontos6 + terceiro.pontos7 + terceiro.pontos8 + terceiro.pontos9 + terceiro.pontos10;
    var ruanh = quarto.pontos1 + quarto.pontos2 + quarto.pontos3 + quarto.pontos4 + quarto.pontos5 + quarto.pontos6 + quarto.pontos7 + quarto.pontos8 + quarto.pontos9 + quarto.pontos10;
    var brener = quinto.pontos1 + quinto.pontos2 + quinto.pontos3 + quinto.pontos4 + quinto.pontos5 + quinto.pontos6 + quinto.pontos7 + quinto.pontos8 + quinto.pontos9 + quinto.pontos10;
    var kennyd = sexto.pontos1 + sexto.pontos2 + sexto.pontos3 + sexto.pontos4 + sexto.pontos5 + sexto.pontos6 + sexto.pontos7 + sexto.pontos8 + sexto.pontos9 + sexto.pontos10;
    var ademiro = setimo.pontos1 + setimo.pontos2 + setimo.pontos3 + setimo.pontos4 + setimo.pontos5 + setimo.pontos6 + setimo.pontos7 + setimo.pontos8 + setimo.pontos9 + setimo.pontos10;
    var tony = oitavo.pontos1 + oitavo.pontos2 + oitavo.pontos3 + oitavo.pontos4 + oitavo.pontos5 + oitavo.pontos6 + oitavo.pontos7 + oitavo.pontos8 + oitavo.pontos9 + oitavo.pontos10;

    let total = `Jean: ${jean} | Pickles: ${pickles} | Relâmpago: ${relampago} | Ruanh: ${ruanh} | Brener: ${brener} | Kennyd: ${kennyd} | Ademiro: ${ademiro} | Tony: ${tony}`

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
                                    <td className="destaque">{oitavo.nome}</td><td>PNG</td><td>RNG</td><td id="win">LIB</td><td>KBM</td><td id="win">LLL</td><td className="destaque">Pontos: {oitavo.pontos1}</td>
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
                                    <td className="destaque">{oitavo.nome}</td><td id="win">FUR</td><td id="win">KBM</td><td id="win">RED</td><td>ITZ</td><td id="win">PNG</td><td className="destaque">Pontos: {oitavo.pontos2}</td>
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
                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 4</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td> <td id="win">LLL</td> <td>KBM</td> <td id="win">FLA</td> <td>RED</td> <td id="win">NET</td> <td className="destaque">Pontos: {primeiro.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td> <td id="win">LLL</td> <td id="win">PNG</td> <td id="win">FLA</td> <td id="win">FUR</td> <td id="win">NET</td> <td className="destaque">Pontos: {segundo.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td> <td id="win">LLL</td> <td id="win">PNG</td> <td>ITZ</td> <td id="win">FUR</td> <td>RNG</td> <td className="destaque">Pontos: {terceiro.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td> <td id="win">LLL</td> <td id="win">PNG</td> <td id="win">FLA</td> <td>RED</td> <td id="win">NET</td> <td className="destaque">Pontos: {quarto.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td> <td id="win">LLL</td> <td>KBM</td> <td id="win">FLA</td> <td id="win">FUR</td> <td>RNG</td> <td className="destaque">Pontos: {quinto.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td className="destaque">Pontos: {sexto.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td> <td>LIB</td> <td>KBM</td> <td>ITZ</td> <td id="win">FUR</td> <td id="win">NET</td> <td className="destaque">Pontos: {setimo.pontos4}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td> <td>-</td> <td id="win">PNG</td> <td id="win">FLA</td> <td>RED</td> <td id="win">NET</td> <td className="destaque">Pontos: {oitavo.pontos4}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 5</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td> <td id="win">LLL</td> <td id="win">PNG</td> <td id="win">RED</td> <td>KBM</td> <td>FUR</td> <td className="destaque">Pontos: {primeiro.pontos5}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td> <td id="win">LLL</td> <td id="win">PNG</td> <td id="win">RED</td> <td>KBM</td> <td>FUR</td> <td className="destaque">Pontos: {segundo.pontos5}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td> <td id="win">LLL</td> <td id="win">PNG</td> <td id="win">RED</td> <td>KBM</td> <td>FUR</td> <td className="destaque">Pontos: {terceiro.pontos5}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td> <td id="win">LLL</td> <td id="win">PNG</td> <td id="win">RED</td> <td>KBM</td> <td>FUR</td> <td className="destaque">Pontos: {quarto.pontos5}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td> <td id="win">LLL</td> <td>NET</td> <td id="win">RED</td> <td>KBM</td> <td>FUR</td> <td className="destaque">Pontos: {quinto.pontos5}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td> <td id="win">LLL</td> <td id="win">PNG</td> <td id="win">RED</td> <td>KBM</td> <td>FUR</td> <td className="destaque">Pontos: {sexto.pontos5}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td> <td>ITZ</td> <td id="win">PNG</td> <td id="win">RED</td> <td>KBM</td> <td>FUR</td> <td className="destaque">Pontos: {setimo.pontos5}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>pt5</td> <td className="destaque">Pontos: {oitavo.pontos5}</td>
                                </tr>

                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 6</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td> <td>PNG</td> <td id="win">RED</td> <td id="win">FUR</td> <td id="win">FLA</td> <td id="win">KBM</td> <td className="destaque">Pontos: {primeiro.pontos6}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td> <td>PNG</td> <td id="win">RED</td> <td id="win">FUR</td> <td>RNG</td> <td id="win">KBM</td> <td className="destaque">Pontos: {segundo.pontos6}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td> <td>PNG</td> <td>LLL</td> <td id="win">FUR</td> <td id="win">FLA</td> <td id="win">KBM</td> <td className="destaque">Pontos: {terceiro.pontos6}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td> <td>PNG</td> <td id="win">RED</td> <td id="win">FUR</td> <td>RNG</td> <td id="win">KBM</td> <td className="destaque">Pontos: {quarto.pontos6}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td> <td>-</td> <td>LLL</td> <td id="win">FUR</td> <td>RNG</td> <td>ITZ</td> <td className="destaque">Pontos: {quinto.pontos6}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td> <td>PNG</td> <td id="win">RED</td> <td id="win">FUR</td> <td>RNG</td> <td id="win">KBM</td> <td className="destaque">Pontos: {sexto.pontos6}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td> <td>PNG</td> <td id="win">RED</td> <td id="win">FUR</td> <td>RNG</td> <td id="win">KBM</td> <td className="destaque">Pontos: {setimo.pontos6}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td> <td>PNG</td> <td id="win">RED</td> <td id="win">FUR</td> <td>RNG</td> <td id="win">KBM</td> <td className="destaque">Pontos: {oitavo.pontos6}</td>
                                </tr>

                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 7</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td> <td>FLA</td> <td id="win">LLL</td> <td id="win">RED</td> <td>FUR</td> <td id="win">LIB</td> <td className="destaque">Pontos: {primeiro.pontos7}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td> <td>FLA</td> <td id="win">LLL</td> <td id="win">RED</td> <td>FUR</td> <td id="win">LIB</td> <td className="destaque">Pontos: {segundo.pontos7}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td> <td>FLA</td> <td id="win">LLL</td> <td id="win">RED</td> <td id="win">PNG</td> <td id="win">LIB</td> <td className="destaque">Pontos: {terceiro.pontos7}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td> <td>FLA</td> <td id="win">LLL</td> <td id="win">RED</td> <td id="win">PNG</td> <td id="win">LIB</td> <td className="destaque">Pontos: {quarto.pontos7}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td> <td id="win">NET</td> <td id="win">LLL</td> <td id="win">RED</td> <td>FUR</td> <td>ITZ</td> <td className="destaque">Pontos: {quinto.pontos7}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td> <td>FLA</td> <td id="win">LLL</td> <td id="win">RED</td> <td id="win">PNG</td> <td id="win">LIB</td> <td className="destaque">Pontos: {sexto.pontos7}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td> <td id="win">NET</td> <td id="win">LLL</td> <td>KBM</td> <td>FUR</td> <td id="win">LIB</td> <td className="destaque">Pontos: {setimo.pontos7}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td> <td>FLA</td> <td id="win">LLL</td> <td id="win">RED</td> <td id="win">PNG</td> <td id="win">LIB</td> <td className="destaque">Pontos: {oitavo.pontos7}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 8</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td> <td id="win">KBM</td> <td id="win">RED</td> <td id="win">PNG</td> <td>NET</td> <td id="win">FUR</td> <td className="destaque">Pontos: {primeiro.pontos8}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td> <td id="win">KBM</td> <td id="win">RED</td> <td id="win">PNG</td> <td id="win">LLL</td> <td id="win">FUR</td> <td className="destaque">Pontos: {segundo.pontos8}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td> <td id="win">KBM</td> <td id="win">RED</td> <td id="win">PNG</td> <td id="win">LLL</td> <td id="win">FUR</td> <td className="destaque">Pontos: {terceiro.pontos8}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td> <td id="win">KBM</td> <td id="win">RED</td> <td id="win">PNG</td> <td id="win">LLL</td> <td id="win">FUR</td> <td className="destaque">Pontos: {quarto.pontos8}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td> <td id="win">KBM</td> <td id="win">RED</td> <td>ITZ</td> <td id="win">LLL</td> <td>FLA</td> <td className="destaque">Pontos: {quinto.pontos8}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td> <td id="win">KBM</td> <td id="win">RED</td> <td id="win">PNG</td> <td id="win">LLL</td> <td id="win">FUR</td> <td className="destaque">Pontos: {sexto.pontos8}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td> <td id="win">KBM</td> <td id="win">RED</td> <td>ITZ</td> <td id="win">LLL</td> <td>FLA</td> <td className="destaque">Pontos: {setimo.pontos8}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td> <td id="win">KBM</td> <td id="win">RED</td> <td id="win">PNG</td> <td>NET</td> <td id="win">FUR</td> <td className="destaque">Pontos: {oitavo.pontos8}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 9</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td> <td id="win">RED</td> <td id="win">FUR</td><td id="win">LIB</td><td id="win">PNG</td><td>KBM</td>    <td className="destaque">Pontos: {primeiro.pontos9}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td> <td id="win">RED</td> <td>LLL</td><td id="win">LIB</td><td id="win">PNG</td><td>KBM</td> <td className="destaque">Pontos: {segundo.pontos9}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td> <td id="win">RED</td> <td>LLL</td><td id="win">LIB</td><td id="win">PNG</td><td>KBM</td> <td className="destaque">Pontos: {terceiro.pontos9}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td> <td id="win">RED</td> <td id="win">FUR</td><td id="win">LIB</td><td id="win">PNG</td><td>KBM</td> <td className="destaque">Pontos: {quarto.pontos9}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td> <td id="win">RED</td> <td>LLL</td><td id="win">LIB</td><td>FLA</td><td>KBM</td> <td className="destaque">Pontos: {quinto.pontos9}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td> <td id="win">RED</td> <td id="win">FUR</td><td id="win">LIB</td><td id="win">PNG</td><td>KBM</td> <td className="destaque">Pontos: {sexto.pontos9}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td> <td>-</td> <td>-</td><td>-</td><td>-</td><td>pt5</td> <td className="destaque">Pontos: {setimo.pontos9}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td> <td id="win">RED</td> <td>LLL</td><td id="win">LIB</td><td id="win">PNG</td><td>KBM</td> <td className="destaque">Pontos: {oitavo.pontos9}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 10</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td> <td>pt1</td> <td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td>    <td className="destaque">Pontos: {primeiro.pontos10}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td> <td>pt1</td> <td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td> <td className="destaque">Pontos: {segundo.pontos10}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td> <td>pt1</td> <td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td> <td className="destaque">Pontos: {terceiro.pontos10}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td> <td>pt1</td> <td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td> <td className="destaque">Pontos: {quarto.pontos10}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td> <td>pt1</td> <td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td> <td className="destaque">Pontos: {quinto.pontos10}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td> <td>pt1</td> <td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td> <td className="destaque">Pontos: {sexto.pontos10}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td> <td>pt1</td> <td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td> <td className="destaque">Pontos: {setimo.pontos10}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td> <td>pt1</td> <td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td> <td className="destaque">Pontos: {oitavo.pontos10}</td>
                                </tr>
                            </table>
                        </div>
                    </div>












                    <div className="totalPontos">
                    <br/><br/><br/><br/><br/>
                        <p> <strong>Total de pontos acumulados:</strong> <br/> <br/> {total} </p>
                        <br/>
                        <i>o calculo é realizado automaticamente</i>
                        <br/><br/><br/><br/><br/><br/><br/>
                    </div>

                </div>
            </div>
        </main>
    );
};
