import React from "react";
import '../../estilos/planilha.css'

export default function Planilha(){
    const primeiro = {nome: 'Jean', pontos1: 0, pontos2: 0}
    const segundo = {nome: 'Pickles', pontos1: 0, pontos2: 0}
    const terceiro = {nome: 'Relâmpago', pontos1: 0, pontos2: 0}
    const quarto = {nome: 'Ruanh', pontos1: 0, pontos2: 0}
    const quinto = {nome: 'Brener', pontos1: 0, pontos2: 0}
    const sexto = {nome: 'Kennyd', pontos1: 0, pontos2: 0}
    const setimo = {nome: 'Ademiro', pontos1: 0, pontos2: 0}
    const oitavo = {nome: 'Victor', pontos1: 0, pontos2: 0}

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
                                    <td className="destaque">{primeiro.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {primeiro.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {segundo.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {terceiro.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {quarto.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {quinto.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {sexto.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {setimo.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {oitavo.pontos1}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="pRodada">
                        <div>
                            <p>Rodada 2</p>
                            <table className="tabelaPLANILHA">
                                <tr>
                                    <td className="destaque">{primeiro.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {primeiro.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{segundo.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {segundo.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{terceiro.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {terceiro.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quarto.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {quarto.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{quinto.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {quinto.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{sexto.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {sexto.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{setimo.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {setimo.pontos1}</td>
                                </tr>
                                <tr>
                                    <td className="destaque">{oitavo.nome}</td><td>pt1</td><td>pt2</td><td>pt3</td><td>pt4</td><td>pt5</td><td className="destaque">Pontos: {oitavo.pontos1}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
