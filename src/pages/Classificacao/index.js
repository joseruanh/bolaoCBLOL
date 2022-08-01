import React from "react";
import '../../estilos/classificacao.css';
import fla from '../Rodadas/logos/fla.png';
import fur from '../Rodadas/logos/fur.png';
import itz from '../Rodadas/logos/itz.png';
import kbm from '../Rodadas/logos/kbm.png';
import lib from '../Rodadas/logos/lib.png';
import lll from '../Rodadas/logos/lll.png';
import net from '../Rodadas/logos/net.png';
import png from '../Rodadas/logos/png.png';
import red from '../Rodadas/logos/red.png';
import rng from '../Rodadas/logos/rng.png';

export default function Classificacao(){
    const primeiro = {nome: 'Ruanh', pontos: 58, posicao: 1}
    const segundo = {nome: 'Pickles', pontos: 55, posicao: 2}
    const terceiro = {nome: 'Jean', pontos: 55, posicao: 2}
    const quarto = {nome: 'Relâmpago', pontos: 54, posicao: 3}
    const quinto = {nome: 'Kennyd', pontos: 52, posicao: 4}
    const sexto = {nome: 'Tony', pontos: 46, posicao: 5}
    const setimo = {nome: 'Brener', pontos: 42, posicao: 6}
    const oitavo = {nome: 'Ademiro', pontos: 37, posicao: 7}

    function cblol(){
        let a = window.document.getElementById('mostraTabela')
        a.innerHTML = `
        <table class="tabelaCBLOL">
            <tr class="time">
                <td class="destaque1">1</td><td> <img src="${fur}" class="logoCLASSIFICACAO"/> </td> <td> 14V | 2D</td>
            </tr>
            <tr class="time">
                <td class="destaque1">2</td><td> <img src="${png}" class="logoCLASSIFICACAO"/> </td> <td> 11V | 5D</td>
            </tr>
            <tr class="time">
                <td class="destaque1">2</td><td> <img src="${red}" class="logoCLASSIFICACAO"/> </td> <td> 11V | 5D</td>
            </tr>
            <tr class="time">
                <td class="destaque1">4</td><td> <img src="${lll}" class="logoCLASSIFICACAO"/> </td> <td> 10V | 6D</td>
            </tr>
            <tr class="time">
                <td class="destaque1">5</td><td> <img src="${kbm}" class="logoCLASSIFICACAO"/> </td> <td> 9V | 7D</td>
            </tr>
            <tr class="time">
                <td class="destaque1">6</td><td> <img src="${net}" class="logoCLASSIFICACAO"/> </td> <td> 8V | 8D</td>
            </tr>
            <tr class="time">
                <td class="destaque1">7</td><td> <img src="${lib}" class="logoCLASSIFICACAO"/> </td> <td> 7V | 9D</td>
            </tr>
            <tr class="time">
                <td class="destaque1">8</td><td> <img src="${fla}" class="logoCLASSIFICACAO"/> </td> <td> 5V | 11D</td>
            </tr>
            <tr class="time">
                <td class="destaque1">9</td><td> <img src="${itz}" class="logoCLASSIFICACAO"/> </td> <td> 4V | 12D</td>
            </tr>
            <tr class="time">
                <td class="destaque1">10</td><td> <img src="${rng}" class="logoCLASSIFICACAO"/> </td> <td> 1V | 15D</td>
            </tr>
        </table>
        `
    }
    function bolao(){
        let a = window.document.getElementById('mostraTabela')
        a.innerHTML = `

        <table class="tabelaCBLOL">

        <tr class="time">
            <td class="classifi"> ${primeiro.posicao} </td> <td> ${primeiro.nome} </td> <td> Pontos: ${primeiro.pontos} </td>
        </tr>

        <tr class="time">
            <td> ${segundo.posicao} </td> <td> ${segundo.nome} </td> <td> Pontos: ${segundo.pontos} </td>
        </tr>

        <tr class="time">
            <td> ${terceiro.posicao} </td> <td> ${terceiro.nome} </td> <td> Pontos: ${terceiro.pontos} </td>
        </tr>

        <tr class="time">
            <td> ${quarto.posicao} </td> <td> ${quarto.nome} </td> <td> Pontos: ${quarto.pontos} </td>
        </tr>

        <tr class="time">
            <td> ${quinto.posicao} </td> <td> ${quinto.nome} </td> <td> Pontos: ${quinto.pontos} </td>
        </tr>

        <tr class="time">
            <td> ${sexto.posicao} </td> <td> ${sexto.nome} </td> <td> Pontos: ${sexto.pontos} </td>
        </tr>

        <tr class="time">
            <td> ${setimo.posicao} </td> <td> ${setimo.nome} </td> <td> Pontos: ${setimo.pontos} </td>
        </tr>

        <tr class="time">
            <td> ${oitavo.posicao} </td> <td> ${oitavo.nome} </td> <td> Pontos: ${oitavo.pontos} </td>
        </tr>

        </table>
        
        `
    }

    

    return(
        <main>
            <div className="principal"></div>
            <div className="conteudo">
                <h1>
                    Classificação CBLOL e Bolão
                </h1>
                <div className="tabelaCla">
                    <div className="botoesClassificacao">
                        <button className="botaoClassificacao1" onClick={cblol}>
                            CBLOL
                        </button>
                        <button className="botaoClassificacao2" onClick={bolao}>
                            BOLÃO
                        </button>
                    </div>
                    <div className="tabelaDeClassificacao" id='mostraTabela'>

                    </div>

                </div>
            </div>
        </main>
    );
};
