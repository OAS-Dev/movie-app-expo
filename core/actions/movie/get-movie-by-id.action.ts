import {movieApi} from '@/core/api/movie-api';
import {MovieDBMovieResponse} from '@/infrastructure/interfaces/moviedb-movie.response';

import {MovieMapper} from '@/infrastructure/mappers/movie.mapper';

export const getMovieByIdAction = async (id: number | string) => {
  try {
    const {data} = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw 'Cannot fetch movie';
  }
};
