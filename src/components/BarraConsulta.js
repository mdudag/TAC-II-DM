import React, { useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default function BarraConsulta({ placeholder, pesq, setPesq, listas, setListaPesq }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            const palavra = pesq.toLowerCase().trim();
            if (palavra === '') setListaPesq(listas);
            else setListaPesq(listas.filter(l => l.titulo.toLowerCase().includes(palavra)));
        }, 300);

        return () => clearTimeout(timer);
    }, [pesq]);

    return (
        <View style={[styles.barraConsulta, { flexDirection: 'row', alignItems: 'center' }]}>
            <TextInput
                style={[styles.textInput, { flex: 1 }]}
                placeholder={placeholder}
                value={pesq}
                onChangeText={setPesq}
            />
            {pesq.length > 0 && (
                <TouchableOpacity onPress={() => setPesq('')}>
                    <Text style={{ fontSize: 18, color: '#666', marginLeft: 8 }}>✖</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
