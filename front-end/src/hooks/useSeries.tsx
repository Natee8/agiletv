import { useEffect } from "react";

const useFetchSeries = () => {
  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/series");
        const data = await res.json();
        console.log(data);
      } catch {
        console.log("Erro ao fazer requisição");
      }
    };
    fetchSeries();
  }, []);
};

export default useFetchSeries;
