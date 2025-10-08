import React from 'react';
import { View, Text } from 'react-native';
import ButtonStyle from './ButtonStyle';
import { styles } from '../styles/styles';

export default function Cabecalho({ handlePressAddLista }) {
    return (
        <View style={styles.cabecalho}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', flex: 1 }}>
                Listas de Exercícios
            </Text>
            <ButtonStyle title=' ✛ ' onPress={handlePressAddLista} />
        </View>
    );
}
