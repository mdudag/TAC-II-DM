import { View, TextInput } from 'react-native';

import { styles } from '../styles/styles';

export function BarraConsulta({ placeholder, setPesq }) {
  return(
    <View style={styles.barraConsulta}>
      <TextInput style={styles.textInput} 
                 placeholder={placeholder}
                 onChangeText={setPesq}/>
    </View>
  );
}