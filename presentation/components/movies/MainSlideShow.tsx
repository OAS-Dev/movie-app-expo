import {View, Text, useWindowDimensions} from 'react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

import {Movie} from '@/infrastructure/interfaces/movie.interface';
import {useRef} from 'react';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
}

const MainSlideShow = ({movies}: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const {width} = useWindowDimensions();

  return (
    <View className='h-[250px] w-full'>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({item}) => <MoviePoster poster={item.poster} id={item.id} />}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        // mode='parallax'
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSlideShow;
