import React from "react";


const GitHubLoginButton: React.FC = () => {
  const clientId = 'SUA_CLIENT_ID_AQUI';
  const redirectUri = 'URL_PARA_ONDE_REDIRIGIR_APOS_LOGIN';
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;

  const handleLogin = () => {
    window.location.href = githubAuthUrl;
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Login with GitHub
    </button>
  );
};

export default GitHubLoginButton;
