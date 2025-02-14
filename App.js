import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  CardStyleInterpolators,
} from '@react-navigation/native';
import {PersonalScreen, TagUserScreen} from './scr/screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TagPostProvider from './scr/assets/context/TagPostProvider';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
      }}>
      <Stack.Screen name="PersonalScreen" component={PersonalScreen} />
      <Stack.Screen name="TagUserScreen" component={TagUserScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <TagPostProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </TagPostProvider>
  );
};

export default App;
