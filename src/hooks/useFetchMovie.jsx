import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useFetchMovie = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    movies: data ? data.results : null,
    error,
    isLoading: false,
  };
};
