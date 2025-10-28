import { Text, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { Botao } from './Botao';
import { cores, styles } from '../styles/styles';

export function Cabecalho({ titulo, handlePressBotaoEsq, handlePressBotaoDir }) {
  const mostrarBotaoEsq = handlePressBotaoEsq!=undefined && 
                       handlePressBotaoEsq!=null;
  const mostrarBotaoDir = handlePressBotaoDir!=undefined && 
                       handlePressBotaoDir!=null; 

  return(
    <View style={styles.cabecalho}>
      {mostrarBotaoEsq && // Define se tem botão ou não
        (<Botao icone={<MaterialIcons name="chevron-left" 
                                      size={26} 
                                      color={cores.corIcons}/>}
              onPress={handlePressBotaoEsq}
              cor='transparent'
              corPress={cores.azulEscuro}
              estiloBotao={{marginRight: 15, 
                            padding: 2, 
                            borderRadius: 20}} />)
      }

      <Text style={styles.tituloCabecalho}
            // Se o texto for maior que o espaço:
            numberOfLines={1}     // Permite o texto em uma linha
            adjustsFontSizeToFit  // Diminui o tamanho da fonte para caber
            minimumFontScale={0.9} // Tamanho mínimo da fonte: até 90% menor
            ellipsizeMode='tail'  // Corta o texto e add reticências se for muito grande
            >
          {titulo}
      </Text>

      {mostrarBotaoDir && // Define se tem botão ou não
        (<Botao icone={<MaterialIcons name="add-circle" size={24} color={cores.corIcons} />}
              onPress={handlePressBotaoDir}
              cor='transparent'
              estiloBotao={{paddingHorizontal: 10}} />)
      }
    </View>
  );
}