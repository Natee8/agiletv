export interface CastMember {
  ID: string;
  Name: string;
}

export interface Genre {
  ID: string;
  Title: string;
}

export interface Images {
  Background: string;
}

export interface Series {
  ID: number;
  Title: string;
  Year: number;
  Reviews: number;
  Synopsis: string;
  Country: string;
  Genres: Genre[];
  Cast: CastMember[];
  Images: Images;
}
