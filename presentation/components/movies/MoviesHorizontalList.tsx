import {Movie} from '@/infrastructure/interfaces/movie.interface';
import {View, Text, FlatList} from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
}

const MovieHorizontalList = ({title, movies, className}: Props) => {
  return (
    <View className={`mt-6 ${className}`}>
      <Text className='text-2xl font-bold px-2 mb-4'>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => <MoviePoster poster={item.poster} id={item.id} smallPoster />}
      />
    </View>
  );
};

export default MovieHorizontalList;
