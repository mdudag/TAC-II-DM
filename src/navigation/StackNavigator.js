import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";

import { LoginSimples } from "../screens/LoginSimples";
import { ListasExercicios } from "../screens/ListasExercicios";
import { ResultadoListas } from "../components/ResultadoListas";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return(
    <Stack.Navigator initialRouteName="LoginSimples"
                     // Retira o cabeçalho (name do screen) de todas as telas
                     screenOptions={{headerShown: false}}>

      <Stack.Screen name="LoginSimples" component={LoginSimples}/>
      <Stack.Screen name="ListasExercicios" component={ListasExercicios}/>
      <Stack.Screen name="ResultadoListas" component={ResultadoListas}/>
      <Stack.Screen name="TabNavigator" component={TabNavigator}/>
      
    </Stack.Navigator>
  );
}