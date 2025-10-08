import React, { useState } from 'react';
import { View } from 'react-native';
import BarraConsulta from './BarraConsulta';
import ResultadoListas from './ResultadoListas';
import { styles } from '../styles/styles';

export default function Corpo({ listas, setListas, sections, listaPesq, setListaPesq }) {
  const [pesq, setPesq] = useState('');

  const handlePressLixeira = (id) => {
    const l = listaPesq.filter(item => item.id !== id);
    setListaPesq(l);
    setListas(l);
  };

  return (
    <View style={styles.corpo}>
      <BarraConsulta 
        placeholder={'🔍 Pesquise uma lista'}
        pesq={pesq}
        setPesq={setPesq}
        listas={listas}
        setListaPesq={setListaPesq}
      />
      <ResultadoListas 
        listas={listaPesq}
        sections={sections}
        handlePressLixeira={handlePressLixeira}
      />
    </View>
  );
}