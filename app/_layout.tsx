import {View, Text} from 'react-native';

import '../global.css';
import {nowPlayingAction} from '@/core/actions/movies/now-playing.action';

const RootLayout = () => {
  nowPlayingAction();

  return (
    <View className='mt-12'>
      <Text className='text-red-600 font-bold text-3xl'>RootLayout</Text>
    </View>
  );
};

export default RootLayout;
