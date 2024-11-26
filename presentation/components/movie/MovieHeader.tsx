import {View, Text, useWindowDimensions, Image, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {router} from 'expo-router';
import {LinearGradient} from 'expo-linear-gradient';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({poster, originalTitle, title}: Props) => {
  const {height: screenHeight} = useWindowDimensions();
  return (
    <>
      {/* Gradiente */}
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={{x: 0, y: 0}}
        style={{height: screenHeight * 0.4, position: 'absolute', zIndex: 99, width: '100%'}}
      />

      {/* Boton de regreso */}
      <View style={{position: 'absolute', zIndex: 99, elevation: 9, top: 40, left: 10}}>
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons name='arrow-back' size={30} color='white' className='shadow' />
        </Pressable>
      </View>

      <View className='shadow-xl shadow-black/20' style={{height: screenHeight * 0.7}}>
        <View className='flex-1 rounded-b-[25px] overflow-hidden'>
          <Image source={{uri: poster}} className='w-full h-full' resizeMode='cover' />
        </View>

        <View className='px-5 mt-5'>
          <Text className='font-normal'>{originalTitle}</Text>
          <Text className='text-2xl font-semibold'>{title}</Text>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;
