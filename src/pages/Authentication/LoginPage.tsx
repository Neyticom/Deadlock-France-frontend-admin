import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { login } from "../../api/authApi";
import { useAuth } from "../../context/authContext";
import PageTitle from "../../components/PageTitle";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ login: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const { setAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await login(credentials.login, credentials.password);
      setAuthenticated(token);
      navigate("/dashboard");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <>
      <PageTitle title="Deadlock France - Se connecter" />
      <div className="flex h-screen flex-col items-center justify-between bg-gray-900 text-white">
        <header className="mt-6">
          <h1 className="text-2xl font-bold">Espace Équipe</h1>
        </header>
        <main className="flex flex-col items-center">
          <div className="mb-6 flex flex-col items-center">
            <img src="src/images/logo/logo-icon.svg" alt="Logo Deadlock France" className="w-20 h-20 mb-2" />
            <span className="mt-2 text-2xl font-semibold text-center">
              <span>Deadlock</span> <span>France</span>
            </span>
          </div>
          <form
            className="flex w-80 flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1 text-sm font-medium">
                Identifiant
              </label>
              <input
                type="text"
                name="login"
                className="w-full rounded-md border-none px-3 py-2 text-black"
                placeholder="Identifiant"
                value={credentials.login}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-sm font-medium">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                className="w-full rounded-md border-none px-3 py-2 text-black"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <a href="forgotten-password" className="text-sm text-blue-400 hover:underline">
              Mot de passe oublié ?
            </a>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-2 font-bold hover:bg-blue-700"
            >
              Se connecter
            </button>
          </form>
        </main>
        <footer className="mb-6 text-lg">
          <Link to="http://localhost:5173" className="text-blue-400 hover:underline">
            {'\u2039'} Retourner sur le site de Deadlock France
          </Link>
        </footer>
      </div>
    </>
  );
};

export default LoginPage;
