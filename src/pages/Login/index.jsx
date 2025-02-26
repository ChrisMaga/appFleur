import './style.css'
import { FaRegUser } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";



function Login() {

  return (
    <div className='container'>
      <form>
        <div className="logotipo">
        <img src="./src/assets/LogotipoFlor.svg" alt="Logo do site" /> </div>
        
        <h1>Acesse sua conta</h1>
        <div> <input name='nomeUsuario' placeholder=' Nome de Usuário' type='text' /> <FaRegUser className="iconUser"/>
        </div>

        <div><input password='senhaUsuario' placeholder=' Senha' type='number' /> <FiEye className="iconPassword"/></div>

        <button type='button'>Entrar</button>
      </form>
      
      <div></div>
    </div>
  )
}

export default Login
