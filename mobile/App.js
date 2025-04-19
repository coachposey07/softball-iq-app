import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RuleEditorScreen from './screens/RuleEditorScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RuleEditor">
        <Stack.Screen
          name="RuleEditor"
          component={RuleEditorScreen}
          options={{ title: 'Rule Editor' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}