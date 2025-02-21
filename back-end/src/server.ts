import express, { Response } from "express";
import fs from "fs";
import path from "path";

import { Series } from "../types/series";
import { Episode } from "../types/episodes";

const app = express();
const port = 3000;

const readJsonFile = <T>(filePath: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data) as T);
    });
  });
};

app.get("/api/series", async (_, res: Response) => {
  try {
    const seriesData = await readJsonFile<Series[]>(
      path.join(__dirname, "../json/seriesData.json")
    );
    res.json(seriesData);
  } catch (err) {
    console.error("Erro ao ler o arquivo de series:", err);
    res.status(500).send("Erro ao ler o arquivo");
  }
});

app.get("/api/episodes", async (_, res: Response) => {
  try {
    const episodesData = await readJsonFile<Episode[]>(
      path.join(__dirname, "../json/seriesEpisodes.json")
    );
    res.json(episodesData);
  } catch (err) {
    console.error("Erro ao ler o arquivo de episodes:", err);
    res.status(500).send("Erro ao ler o arquivo");
  }
});

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
