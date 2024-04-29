import {movieInfo} from './movie.type';

export type cardInfo = {
  id: number;
  backdrop_path: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
  title: string;
  adult?: boolean | null;
};

export type card = movieInfo[] | undefined;
export type detailedCardTypes = {
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  original_language: string;
  adult?: boolean | null;
};

export type deatailedCard = detailedCardTypes[];
