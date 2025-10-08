import React, { useState } from 'react';
import { View, Text, SectionList, Pressable, Button } from 'react-native';
import ModalLista from './ModalLista';
import { styles, cores } from '../styles/styles'; // Importa cores do styles

export default function ResultadoListas({ listas, sections, handlePressLixeira }) {
  const [isVisible, setIsVisible] = useState(false);
  const [itemLista, setItemLista] = useState({});

  const modalOpen = (item) => {
    setItemLista(item);
    setIsVisible(true);
  };

  const modalClose = () => {
    setIsVisible(false);
  };

  const renderLista = ({ item }) => {
    return (
      <View style={styles.barraLista}>
        <View style={{ flex: 1 }}>
          <Pressable onPress={() => modalOpen(item)}>
            <Text>{item.titulo}</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 14 }}>
          <Button 
            title='🗑️' 
            color={cores.branco} // Agora funciona
            onPress={() => handlePressLixeira(item.id)} 
          />
        </View>
      </View>
    );
  };

  const renderSectionLista = ({ section: { title } }) => {
    return <Text style={styles.headerListas}>{title}</Text>;
  };

  return (
    <View style={styles.resultado}>
      <SectionList 
        sections={sections}
        keyExtractor={lista => lista.id.toString()}
        renderItem={renderLista}
        renderSectionHeader={renderSectionLista}
        stickySectionHeadersEnabled={false}
      />
      <ModalLista 
        isVisible={isVisible}
        modalClose={modalClose}
        itemLista={itemLista}
      />
    </View>
  );
}