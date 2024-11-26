import {movieApi} from '@/core/api/movie-api';
import {CreditsResponse} from '@/infrastructure/interfaces/moviedb-movie-credits.response';
import {CastMapper} from '@/infrastructure/mappers/cast.mapper';

export const getMovieCastAction = async (id: number | string) => {
  try {
    const {data} = await movieApi.get<CreditsResponse>(`/${id}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToMovieCast);
  } catch (error) {
    console.log(error);
    throw 'Cannot fetch credits movie';
  }
};
