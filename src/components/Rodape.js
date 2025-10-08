import React from 'react';
import { View, Button } from 'react-native';
import ButtonStyle from './ButtonStyle';
import { styles } from '../styles/styles';

export default function Rodape() {
    return (
        <View style={styles.rodape}>
            <ButtonStyle title=' 🏚️ ' />
            <ButtonStyle title=' 🗺️ ' />
            <View style={{ marginRight: 10 }}>
                <Button title=' 📋 ' color='#B8EBCC' />
            </View>
            <ButtonStyle title=' ✏️ ' />
            <ButtonStyle title=' 👤 ' />
        </View>
    );
}
