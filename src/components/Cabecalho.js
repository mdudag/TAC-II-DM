import { Text, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { Botao } from './Botao';
import { cores, styles } from '../styles/styles';

export function Cabecalho({ handlePressAddLista }) {
  return(
    <View style={styles.cabecalho}>
      <Text style={styles.tituloCabecalho}
            // Se o texto for maior que o espaço:
            numberOfLines={1}     // Permite o texto em uma linha
            adjustsFontSizeToFit  // Diminui o tamanho da fonte para caber
            minimumFontScale={0.9} // Tamanho mínimo da fonte: até 90% menor
            ellipsizeMode='tail'  // Corta o texto e add reticências se for muito grande
            >
          Listas de Exercícios
      </Text>
      <Botao icone={<MaterialIcons name="add-circle" size={24} color={cores.corIcons} />}
             onPress={handlePressAddLista}
             cor='transparent'
             estiloBotao={{paddingHorizontal: 10}} />
    </View>
  );
}