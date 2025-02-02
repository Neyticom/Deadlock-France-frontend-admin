import { useState, useEffect } from 'react';

// Simule un état d'authentification (idéalement, tu utiliserais un contexte global ou Redux)
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Vérifie si un token d'auth existe (exemple avec localStorage)
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); // Convertit en booléen
  }, []);

  return { isAuthenticated };
};

export default useAuth;