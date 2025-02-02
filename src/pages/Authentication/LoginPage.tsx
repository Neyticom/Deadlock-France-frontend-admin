import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "password123") {
      navigate("/admin");
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-between bg-gray-900 text-white">
      <header className="mt-6">
        <h1 className="text-2xl font-bold">Panneau Admin</h1>
      </header>
      <main className="flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
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
              name="username"
              id="username"
              className="w-full rounded-md border-none px-3 py-2 text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              id="password"
              className="w-full rounded-md border-none px-3 py-2 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <a href="/" className="text-blue-400 hover:underline">
          {'\u2039'} Retourner à Deadlock France
        </a>
      </footer>
    </div>
  );
};

export default LoginPage;
