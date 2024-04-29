export const getFilmRate = (rate: number) =>
  rate <= 2 ? 1 : rate <= 4 ? 2 : rate <= 6 ? 3 : rate <= 8 ? 4 : 5;
