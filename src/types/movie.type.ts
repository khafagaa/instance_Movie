export type movieType = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type HistoryState = {
  history: movieInfo[];
};
export type movieInfo = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type recievedData = {
  page: number;
  results: movieInfo[];
  total_pages: number;
  total_results: number;
};
