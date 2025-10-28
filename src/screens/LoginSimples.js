import { View, Text } from 'react-native';

import { Botao } from '../components/Botao';
import { cores } from '../styles/styles';

export function LoginSimples({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Bem-vindo ao</Text>
      <Text style={{ fontSize: 50, marginBottom: 40}}>GeoMap</Text>
      <Botao titulo="Entrar no App" 
             cor={cores.verde} 
             corPress={cores.azul} 
             estiloBotao={{padding: 10, borderRadius: 10, elevation: 4}}
             onPress={() => navigation.navigate('ListasExercicios')} />
    </View>
  );
}
