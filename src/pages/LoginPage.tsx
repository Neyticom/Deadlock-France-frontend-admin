import type React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.scss';

function LoginPage(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "password123"){
      navigate("/dashboard");
    } else {
      alert ("Identifiants incorrects");
    }
  };

    return (
      <div className="login-page__container">
      <header>
        <h1 className="login-page__title">Pannel Admin</h1>
      </header>
      <main className="login-page__content">
        <div className="login-page__logo-container">
          <img
            src="src/assets/icons/logo.png"
            alt="logo deadlock france"
            className="login-page__logo-container_image"
          />
          <span className="login-page__logo-container_title">
            <span>Deadlock</span>
            <span>France</span> 
          </span>
        </div>
        <form className="login-page__content__form" onSubmit={handleSubmit}>
          <div className="login-page__content__inputs">
            <label htmlFor="username">Identifiant</label>
            <input
              type="text"
              name="username"
              id="username"
              // placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login-page__content__inputs">
          <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              // placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a href="forgotten-password">Mot de passe oublié ?</a>
          <div>
            <button type="submit" className="login-page__submit-button">
              Se connecter
            </button>
          </div>
        </form>
      </main>
      <footer><a href="/"> {'\u2039'}- Retourner à Deadlock France</a></footer>
    </div>
    );
};

export default LoginPage;