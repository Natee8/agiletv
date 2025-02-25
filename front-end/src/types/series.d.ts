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
  Synopsis: string;
  Reviews: number;
  Country: string;
  Genres: Genre[];
  Cast: CastMember[];
  Images: Images;
}
