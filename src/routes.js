import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Switch,
    Link 
    } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Header from './pages/Header';
import Rodadas from './pages/Rodadas';
import Planilha from './pages/Planilha';
import Classificacao from './pages/Classificacao';

const Rotas = () => {
    return(
        <Router>
            <Header/>
        <Routes>

            <Route exact path='/' element={<Inicio/>} />
            <Route exact path='/rodadas' element={<Rodadas/>} />
            <Route exact path='/planilha' element={<Planilha/>} />
            <Route exact path='/classificacao' element={<Classificacao/>} />

        </Routes>

        </Router>
    )
}
export default Rotas;