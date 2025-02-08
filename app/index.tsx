// Home page
import { ScrollView, Image, Platform, View, Text, StatusBar} from 'react-native';
import { Redirect, router, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'; //content does not overlap with bottom bars, status bars, etc

import { images } from '../constants';
import CustomButton from '@/components/CustomButton';

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-primary h-full'>

      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className='w-full justify-center items-center min-h-[85vh] px-6'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='max-w--[380px] w-full h-[300px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'> 
              Discover Endless{"\n"} Possibilities with{" "}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>

            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2.5 -right-10'
              resizeMode='contain'
            />
          </View>

          <Text className='text-sm font-pregular mt-7 text-center text-gray-100'>Where creativity meets innovation: 
            embark on a journey of limitless exploration
            with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622'
        barStyle='light-content' />

    </SafeAreaView>
  );
}