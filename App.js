import React, { useState, useMemo } from 'react';
import { View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Cabecalho from './src/components/Cabecalho';
import Corpo from './src/components/Corpo';
import Rodape from './src/components/Rodape';
import ModalAdicionarLista from './src/components/ModalAdicionarLista'; // Importe o novo modal
import { styles } from './src/styles/styles';

export default function App() {
  const [listas, setListas] = useState([
    // suas listas originais...
  ]);

  const [listaPesq, setListaPesq] = useState(listas);
  const [ID, setID] = useState(6);
  const [modalAdicionarVisible, setModalAdicionarVisible] = useState(false); // Estado do modal

  // Função para abrir modal de adicionar
  const handlePressAddLista = () => {
    setModalAdicionarVisible(true);
  };

  // Função para adicionar nova lista
  const handleAdicionarLista = (novaLista) => {
    setListas(l => [...l, novaLista]);
    setListaPesq(l => [...l, novaLista]);
    setID(ID + 1);
  };

  // Criando as seções de Visível e Não Visível
  const sections = useMemo(() => {
    const todasSections = [
      { title: 'Não Visível', data: listaPesq.filter(l => !l.isVisivel) },
      { title: 'Visível', data: listaPesq.filter(l => l.isVisivel) }
    ];
    return todasSections.filter(s => s.data.length > 0);
  }, [listaPesq]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top} />

      <View style={styles.screen}>
        <StatusBar style='dark' backgroundColor='#D0F5FF'/>

        <Cabecalho handlePressAddLista={handlePressAddLista} />

        <ImageBackground
          source={require('./assets/fundo.png')}
          resizeMode='cover'
          style={styles.corpoFundo}
        >
          <Corpo
            listas={listas}
            setListas={setListas}
            sections={sections}
            listaPesq={listaPesq}
            setListaPesq={setListaPesq}
          />
        </ImageBackground>

        <Rodape />

        {/* Modal para adicionar nova lista */}
        <ModalAdicionarLista
          isVisible={modalAdicionarVisible}
          modalClose={() => setModalAdicionarVisible(false)}
          onAdicionarLista={handleAdicionarLista}
        />
      </View>
    </View>
  );
}