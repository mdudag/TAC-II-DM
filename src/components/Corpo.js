import React, { useState } from 'react';
import { View } from 'react-native';
import BarraConsulta from './BarraConsulta';
import ResultadoListas from './ResultadoListas';
import { styles } from '../styles/styles';

export default function Corpo({ sections, listaPesq, setListaPesq }) {
    const [pesq, setPesq] = useState('');

    const handlePressLixeira = (id) => {
        setListaPesq(listaPesq.filter(item => item.id !== id));
    };

    return (
        <View style={styles.corpo}>
            <BarraConsulta
                placeholder='🔍 Pesquise uma lista'
                pesq={pesq}
                setPesq={setPesq}
                listas={listaPesq}
                setListaPesq={setListaPesq}
            />
            <ResultadoListas sections={sections} handlePressLixeira={handlePressLixeira} />
        </View>
    );
}
