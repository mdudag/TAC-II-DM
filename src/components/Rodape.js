import { View } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"

import { Botao } from './Botao';
import { styles, cores } from '../styles/styles';

export function Rodape() {
  const cor=cores.azul,paddingHorizontal=14, paddingVertical=12, marginHorizontal=8,borderRadius=40;
  const tamBnt=30;

  return(
    <View style={styles.rodape}>
      <Botao icone={<MaterialIcons name="home-filled" size={tamBnt} color={cores.corIcons} />}
             cor={cor}
             corPress='#rgba(117, 176, 193, 1)'
             estiloBotao={{paddingHorizontal: paddingHorizontal,
                           paddingVertical: paddingVertical,
                           marginHorizontal: marginHorizontal,
                           borderRadius: borderRadius}} />
      <Botao icone={<MaterialIcons name="map" size={tamBnt} color={cores.corIcons} />}
             cor={cor}
             corPress='#rgba(117, 176, 193, 1)'
             estiloBotao={{paddingHorizontal: paddingHorizontal,
                           paddingVertical: paddingVertical,
                           marginHorizontal: marginHorizontal,
                           borderRadius: borderRadius}} />
      <Botao icone={<MaterialIcons name="menu-book" size={tamBnt} color={cores.corIcons} />}
             cor={cores.verde}
             corPress='#9bc6acff'
             estiloBotao={{paddingHorizontal: paddingHorizontal,
                           paddingVertical: paddingVertical,
                           marginHorizontal: marginHorizontal,
                           borderRadius: borderRadius,
                           elevation: 5}} />
      <Botao icone={<MaterialIcons name="note-alt" size={tamBnt} color={cores.corIcons} />}
             cor={cor}
             corPress='#rgba(117, 176, 193, 1)'
             estiloBotao={{paddingHorizontal: paddingHorizontal,
                           paddingVertical: paddingVertical,
                           marginHorizontal: marginHorizontal,
                           borderRadius: borderRadius}} />
      <Botao icone={<MaterialIcons name="account-circle" size={tamBnt} color={cores.corIcons} />}
             cor={cor}
             corPress='#rgba(117, 176, 193, 1)'
             estiloBotao={{paddingHorizontal: paddingHorizontal,
                           paddingVertical: paddingVertical,
                           marginHorizontal: marginHorizontal,
                           borderRadius: borderRadius}} />
    </View>
  );
}