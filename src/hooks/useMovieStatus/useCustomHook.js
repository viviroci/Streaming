import { useState, useEffect } from 'react';

const useMovieStatus = (movieId) => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Simulación de fetch a una API para obtener el estado de la película
    const fetchStatus = async () => {
      try {
        const response = await fetch(`/api/movies/${movieId}/status`);
        const data = await response.json();
        setStatus(data.status);
      } catch (error) {
        console.error("Error fetching movie status:", error);
      }
    };

    fetchStatus();
  }, [movieId]);

  return status;
};

export default useMovieStatus;
