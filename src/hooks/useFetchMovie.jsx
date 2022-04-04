import { fetcher } from "src/utils/fetcher";
import { fetchUrl } from "../utils/fetchUrl";
import useSWR from "swr";

export const useFetchMovie = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    movies: data ? data.results : null,
    error,
    isLoading: false,
  };
};
