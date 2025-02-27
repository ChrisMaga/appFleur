import './style.css'
import { FaRegUser } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Envio");
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="logotipo">
        <img src="./src/assets/LogotipoFlor.svg" alt="Logo do site" /> </div>
        
        <h1>Acesse sua conta</h1>
        <div className='input-field'> 
          <input name='nomeUsuario' placeholder=' Nome de Usuário' type='text' onChange={(e) => setUsername(e.target.value)} /> <FaRegUser className="icon"/>
        </div>

        <div className='input-field'>
          <input password='senhaUsuario' placeholder=' Senha' type='password' maxLength={8} onChange={(e) => setPassword(e.target.value)}/> <FiEye className="icon"/></div>

        <button className="button" type='button'>Entrar</button>
            
        <div className='signup-link'>
          <a href="#">Criar conta</a>
        </div>
      </form>
    </div>
  )
}

export default Login
