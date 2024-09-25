import React from "react";
import "./github-button-styles.css"


const GitHubLoginButton: React.FC = () => {
  const clientId = 'SUA_CLIENT_ID_AQUI';
  const redirectUri = 'URL_PARA_ONDE_REDIRIGIR_APOS_LOGIN';
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;

  const handleLogin = () => {
    window.location.href = githubAuthUrl;
  };

  return (
    <button className="github--button"
      onClick={handleLogin}
    >
      Login with GitHub
    </button>
  );
};

export default GitHubLoginButton;
