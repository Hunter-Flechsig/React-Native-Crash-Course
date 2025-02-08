// Home page
import { Image, Platform, View, Text} from 'react-native';
import { Link } from 'expo-router'

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl"> Aora! </Text>
      <Link href="/(tabs)/profile" style={{ color: 'blue'}}>Go to Profile</Link>
    </View>
  );
}