import {movieApi} from '@/core/api/movie-api';
import {MovieDBMovieResponse} from '@/infrastructure/interfaces/moviedb.response';
import {MovieMapper} from '@/infrastructure/mappers/movie.mapper';

export const upcomingMoviesAction = async () => {
  try {
    const {data} = await movieApi.get<MovieDBMovieResponse>('/upcoming');
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot fetch movies';
  }
};
