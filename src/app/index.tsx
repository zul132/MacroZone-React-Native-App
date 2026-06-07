import { StyleSheet, Text, View } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.title}>MacroZone</Text>
      <Text style={styles.date}>Monday, March 16</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  date: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
    marginBottom: 30,
  },
});