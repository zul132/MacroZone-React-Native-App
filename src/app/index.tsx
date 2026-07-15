import HomeHeader from '@/components/HomeHeader';
import { globalStyles } from '@/styles/global';
import { Link } from 'expo-router';
import { ScrollView, Text } from 'react-native';

/*
  View:
  Every page or screen you create will be wrapped in a View, and the components within that will be wrapped in a View as well.

  A ScrollView component wraps the platform ScrollView - used when we want to scroll up and down a long page or screen.

  In our app, we will use ScrollView on the Home screen and All Meals screen, whereas the 
  Add Meal screen will just be a simple form so we don't really need a ScrollView there.

  For responding to touch-based input, you can use any of the following Core Components
  - Button
  - Pressable
  - TouchableOpacitya
*/

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <Link href='/meals' style={{ fontSize: 18, color: '#007bff' }}>
        Go to Meals
      </Link>
    </ScrollView>
  );
}

