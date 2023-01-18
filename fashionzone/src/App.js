import './style.css'
import imagem1 from './Assets/imagem1.png'
import croxa from './Assets/croxa.jpg'

function App() {
  return (
    <div className="container">

      <div className="cabecalho">
        <h1 className='title'>Fashion Zone</h1>
        <input type="text" placeholder="O que você procura?"></input>
        <button>Procurar</button>

      </div>
      <div className="categorias">
        <button className="ButtonCategoria">Camisas & Tops</button>
        <button className="ButtonCategoria">Lingerie</button>
        <button className="ButtonCategoria">Vestidos</button>
        <button className="ButtonCategoria">Casacos</button>
        <button className="ButtonCategoria">Praia</button>
        <button className="ButtonCategoria">Calçados</button>
        <button className="ButtonCategoria">Calças & shorts</button>
        <button className="ButtonCategoria">Fitness</button>
        <button className="ButtonCategoria">Entre/Cadastre-se</button>

      </div>
      <div className="produtos">
        <img src={croxa} alt='imagem1'/>
        <img src={croxa} alt='imagem1'/>
        <img src={croxa} alt='imagem1'/>
      
      </div>
      <div className="footer">
        <div>
          <h3>Contato</h3>
          <p>
            Juliano Ferreira<br/>
            +552123919271
          </p>
        </div>
        <div>
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
