import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './componet/Home';
import About from './componet/About';

export default function App() {
  const Stack = createNativeStackNavigator();
  // <Home
  return (
   <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="About" component={About} initialParams={
        {name: "Guest"}
      }/>
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
