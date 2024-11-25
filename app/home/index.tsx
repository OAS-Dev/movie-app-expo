import {View, ActivityIndicator, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useMovies} from '@/presentation/hooks/useMovies';
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MoviesHorizontalList from '@/presentation/components/movies/MoviesHorizontalList';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const {nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery} = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{paddingTop: safeArea.top}}>
        <Text className='text-3xl font-bold px-4 mb-4'>Movies App</Text>
        {/* Carrousel de imagenes */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Populares */}
        <MoviesHorizontalList movies={popularQuery.data ?? []} title='Populares' className='mb-2' />

        {/* Mejor calificadas */}
        <MoviesHorizontalList
          movies={topRatedQuery.data?.pages.flat() ?? []}
          title='Mejor calificadas'
          className='mb-2'
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* Proximamente */}
        <MoviesHorizontalList movies={upcomingQuery.data ?? []} title='Proximamente' className='mb-2' />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
