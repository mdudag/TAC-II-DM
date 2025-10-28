import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { TabNavigator } from './src/navigation/TabNavigator';

export default function App() {
  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}