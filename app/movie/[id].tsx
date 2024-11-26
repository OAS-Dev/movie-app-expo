import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import {useLocalSearchParams} from 'expo-router';

import {useMovie} from '@/presentation/hooks/useMovie';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieCast from '@/presentation/components/movie/MovieCast';

const MovieScreen = () => {
  const {id} = useLocalSearchParams();

  const {movieQuery} = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text className='mb-4'>Espere por favor...</Text>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        poster={movieQuery.data.poster}
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
      />

      <MovieDescription movie={movieQuery.data} />

      <MovieCast id={Array.isArray(id) ? id[0] : id} />
    </ScrollView>
  );
};

export default MovieScreen;
