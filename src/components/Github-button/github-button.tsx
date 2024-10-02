import React from "react";
import "./github-button-styles.css"
import githubIcon from "../../assets/github-icon.svg"
import githubTextLogo from "../../assets/GitHub_Logo.png"
import { useNavigate } from 'react-router-dom';


const GitHubLoginButton: React.FC = () => {
  const clientId = 'SUA_CLIENT_ID_AQUI';
  const redirectUri = 'URL_PARA_ONDE_REDIRIGIR_APOS_LOGIN';
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;

  const handleLogin = () => {
    window.location.href = githubAuthUrl;
  };

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/home'); // Redireciona para a página /about
  };

  return (
    <button className="github--button"
      onClick={goToHomePage}
    >
      <img src={githubIcon} alt="github-icon" className="button--githubIcon"/>
      <img src={githubTextLogo} alt="github-text" className="button--githubTextLogo"/>
    </button>
  );
};

export default GitHubLoginButton;
