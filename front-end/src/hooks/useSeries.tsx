import { useEffect, useState } from "react";
import { Series } from "../types/series";

const useFetchSeries = () => {
  const [series, setSeries] = useState<Series[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/series");
        if (!res.ok) throw new Error("erro ao carregar episodios");
        const data = await res.json();
        setSeries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };
    fetchSeries();
  }, []);
  return { series, loading, error };
};

export default useFetchSeries;
