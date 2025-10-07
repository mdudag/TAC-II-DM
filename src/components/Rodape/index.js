import { View, Button } from 'react-native';
import { styles } from './styles';
import { ButtonStyle } from './style';

export function Rodape() {
    return(
        <View style={styles.rodape}>
            <ButtonStyle title=' 🏚️ '/>
            <ButtonStyle title=' 🗺️ '/>
            <View style={{marginRight: 10}}>
                <Button title=' 📋 '
                        color='#B8EBCC'/>
            </View>
            <ButtonStyle title=' ✏️ '/>
            <ButtonStyle title=' 👤 '/>
        </View>
    );
}

// Componente de botão customizado
function ButtonStyle({title, onPress}) {
    return(
        <View style={{marginHorizontal: 5}}>
            <Button title={title}
                    color='#B8EBCC'
                    onPress={onPress}/>
        </View>
    );
}