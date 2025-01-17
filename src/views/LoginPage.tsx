import type React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

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
      <>
      <header>
        <h1 className="login-page__title">Pannel Admin</h1>
      </header>
      <main className="login-page__content">
        <div className="login-page__logo-container">
          <img
            src="/home/student/Deadlock-France-frontend-admin/src/assets/icons/logo.png"
            alt="logo deadlock france"
            className="login-page__logo-container_image"
          />
          <span className="login-page__logo-container_title">
            Deadlock France
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="login-page__submit-button">
              Se connecter
            </button>
          </div>
        </form>
      </main>
    </>
    );
};

export default LoginPage;