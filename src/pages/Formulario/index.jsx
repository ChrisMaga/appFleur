import './style.css'
import { FaRegUser } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

const Settings = () => {
  return (
    <div className="settings-container">
      <header className="settings-header">
        <button className="menu-button">☰</button>
        <h1 className="logo">Fleur</h1>
      </header>

      <h2 className="settings-title">Configurações</h2>

      <ul className="settings-list">
        <li>
          <i className="icon user-icon"></i>
          <span>Perfil e Informações da Gestante</span>
          <p>Editar dados</p>
        </li>
        <li>
          <i className="icon bell-icon"></i>
          <span>Preferências do App</span>
          <p>Notificações</p>
        </li>
        <li>
          <i className="icon shield-icon"></i>
          <span>Privacidade e Segurança</span>
          <p>Email, senha</p>
        </li>
        <li>
          <i className="icon help-icon"></i>
          <span>Ajuda e Suporte</span>
          <p>Perguntas frequentes</p>
        </li>
        <li>
          <i className="icon info-icon"></i>
          <span>Sobre o Aplicativo</span>
          <p>Versão, política de privacidade</p>
        </li>
      </ul>

      <button className="logout-button">Sair</button>
    </div>
  );
};

export default Settings;
