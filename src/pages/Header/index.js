import '../../estilos/header.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return(
       <header>
           <div className="logo">
               <Link to="/" className='inicio'>BolãoCBLOL</Link>
           </div>
           <div className="rotas">
               <Link to="/rodadas" className='botoes'>Rodadas</Link>
               <Link to="/planilha" className='botoes'>Planilha</Link>
               <Link to="/classificacao" className='botoes'>Classificação</Link>
           </div>
       </header>
    );
};
