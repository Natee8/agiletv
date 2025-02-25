import { useEffect, useState } from "react";

const useFetchEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/episodes");
        if (!res.ok) throw new Error("erro ao carregar episodios");
        const data = await res.json();
        setEpisodes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };
    fetchEpisodes();
  }, []);
  return { episodes, loading, erro };
};

export default useFetchEpisodes;
