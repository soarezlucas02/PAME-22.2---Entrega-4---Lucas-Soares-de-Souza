import { FiSearch} from 'react-icons/fi'
import './style.css'
import './index'

import cbranca from './Assets/cbranca.jpg'

function App() {
  return (
    <div className="container">

      <div className="cabecalho">
        <div className='title'>
        <h1 >Fashion Zone</h1>
        </div>
        <div className='pesquisa'>
        <input type="text"  placeholder="O que você procura?"></input>
        <button>
          <FiSearch size="20"/>
        </button>
        </div>
      </div>
      <div className="categorias">
        <button>Camisas & Tops</button>
        <button>Lingerie</button>
        <button>Vestidos</button>
        <button>Casacos</button>
        <button>Praia</button>
        <button>Calçados</button>
        <button>Calças & shorts</button>
        <button>Fitness</button>
        <button>Entre/Cadastre-se</button>

      </div>
      <div className="produtos">
        <div className='camisa1'>
        <img src={cbranca} alt='imagem1'/>
        <p>R$ 94,80</p>
        </div>
        <div className='camisa2'>
        <img src={cbranca} alt='imagem1'/>
        <p>R$ 94,80</p>
        </div>
        
        <div className='camisa3'>
        <img src={cbranca} alt='imagem1'/>
        <p>R$ 94,80</p>
        </div>
      
      </div>
      <div className="footer">
        <div className='contato'>
          <h3>Contato</h3>
          <p>
            Juliano Ferreira<br/>
            +552123919271
          </p>
        </div>
        <div className='localizacao'>
          <h3>
            Localização
          </h3>
          <p>
            Nova Friburgo
          </p>
       </div>
      </div>
    </div>
  );
}

export default App;
