import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { VisualizarLista } from "../screens/VisualizarLista";
import { VisualizarExerciciosLista } from "../screens/VisualizarExerciciosLista";

const Tab = createBottomTabNavigator();

export function TabNavigator({ route }) {
  const { item } = route.params || {};

  return(
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="VisualizarLista" >
      <Tab.Screen name="VisualizarLista" 
                  component={VisualizarLista} 
                  initialParams={{ item }}
                  options={{tabBarLabel: 'Lista'}}
                  />
      <Tab.Screen name="VisualizarExerciciosLista" 
                  component={VisualizarExerciciosLista} 
                  initialParams={{ item }}
                  options={{tabBarLabel: 'Exercícios'}}
                  />
    </Tab.Navigator>
  );
}