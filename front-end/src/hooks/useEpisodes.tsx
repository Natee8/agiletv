import { useEffect, useState } from "react";
import { Episodes } from "../types/episodes";

const useFetchEpisodes = () => {
  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/episodes");
        if (!res.ok) throw new Error("erro ao carregar episodios");
        const data = await res.json();
        console.log("API Response:", data);
        setEpisodes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };
    fetchEpisodes();
  }, []);
  return { episodes, loading, error };
};

export default useFetchEpisodes;
