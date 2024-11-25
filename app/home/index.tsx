import {View, ActivityIndicator, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useMovies} from '@/presentation/hooks/useMovies';
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const {nowPlayingQuery} = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  return (
    <View className='mt-2' style={{paddingTop: safeArea.top}}>
      <Text className='text-3xl font-bold px-4 mb-4'>Movies App</Text>
      {/* Carrousel de imagenes */}
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
