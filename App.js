import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen';
import ISSScreen from './Screens/ISSScreen';
import MeteorScreen from './Screens/MeteorScreen';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown : false}} >
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="ISS" component={ISSScreen}/>
      <Stack.Screen name="Meteor" component={MeteorScreen}/>

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
