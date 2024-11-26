import {useMovie} from '@/presentation/hooks/useMovie';
import {View, Text, FlatList} from 'react-native';
import {ActorCard} from './ActorCard';

interface Props {
  id: string;
}

const MovieCast = ({id}: Props) => {
  const {castQuery} = useMovie(+id);
  return (
    <View className='mt-6 mb-10'>
      <Text className='text-2xl font-bold px-5 mb-4'>Actores</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={castQuery.data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
