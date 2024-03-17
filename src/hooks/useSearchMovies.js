import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchMovies = ({ keyword, page }) => {
  return keyword
    ? api.get(`search/movie?query=${keyword}&page=${page}`)
    : api.get(`movie/popular?page=${page}`);
};
function processData(result){
  const totalPages = result.data.total_pages;
  const movies = result.data.results;
  const ids = result.data.results.map(movie => movie.id)
  return {totalPages, movies, ids};
}

export const useSearchMoviesQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ['movie-search', keyword, page],
    queryFn: () => fetchSearchMovies({ keyword, page }),
    select: (result) => processData(result),
	 retry: 1,
  });
}; 
