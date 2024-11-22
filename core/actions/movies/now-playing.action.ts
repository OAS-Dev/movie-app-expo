import {movieApi} from '@/core/api/movie-api';
import {MovieDBMovieResponse} from '@/infrastructure/interfaces/moviedb.response';
import {MovieMapper} from '@/infrastructure/mappers/movie.mapper';

export const nowPlayingAction = async () => {
  try {
    const {data} = await movieApi.get<MovieDBMovieResponse>('/now_playing');
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot fetch movies';
  }
};
