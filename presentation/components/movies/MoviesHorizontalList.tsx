import {useEffect, useRef} from 'react';
import {View, Text, FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

import {Movie} from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;

  // Methods
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({title, movies, className, loadNextPage}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const {contentOffset, contentSize, layoutMeasurement} = event.nativeEvent;

    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();
  };

  return (
    <View className={`mt-6 ${className}`}>
      <Text className='text-2xl font-bold px-2 mb-4'>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({item}) => <MoviePoster poster={item.poster} id={item.id} smallPoster />}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
