import { Link } from 'react-router-dom';
import './style.css';


function telaInicio2() {
    return (

        <div className='container'>

            <div className="logotipo">
                <img src="./src/assets/LogotipoFlor.svg" alt="Logo do site" /> </div>
            <h1>Boas Vindas!</h1>
            <h2>Vamos começar?</h2>
           
            <button type='button'>Cadastrar</button>
            

            <Link to="/login">
                <button type='submit'>Entrar na conta</button>
            </Link>
        </div>
    )
}

export default telaInicio2
