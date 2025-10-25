import { View } from 'react-native';

import {BarraConsulta} from './BarraConsulta';
import {ResultadoListas} from './ResultadoListas';
import { styles } from '../styles/styles';

export function Corpo({ sections, setPesq, handlePressLixeira }) {
  return(
    <View style={styles.corpo}>
      <BarraConsulta placeholder={'🔍 Pesquise uma lista'} 
                     setPesq={setPesq}/>
      <ResultadoListas sections={sections} 
                       handlePressLixeira={handlePressLixeira}/>
    </View>
  );
}