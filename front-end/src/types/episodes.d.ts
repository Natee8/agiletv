export interface Episodes {
  ID: string;
  Title: string;
  EpisodeNumber: number;
  SeasonNumber: number;
  Duration: number;
  Image: string;
  Synopsis?: string;
}

export interface EpisodeList {
  Episodes: Episodes[];
}
