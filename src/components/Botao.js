import { Text, Pressable } from 'react-native';

import { cores } from '../styles/styles';

export function Botao({
  titulo = null,
  onPress = () => {},
  cor = cores.branco,
  corPress = 'transparent',
  estiloBotao = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  estiloText = {
    color: '#000',
    fontSize: 16
  },
  icone = null
}) {
  return(
    <Pressable onPress={onPress}
               style={({pressed}) => [ {
                backgroundColor: cor? (pressed? corPress: cor): 'transparent'
               }, estiloBotao]}>
      {icone && <Text>{icone}</Text>}
      {titulo && <Text style={estiloText}>{titulo}</Text>}
    </Pressable>
  );
}