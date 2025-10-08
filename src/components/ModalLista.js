import React from 'react';
import { Modal, View, Text, Pressable, ScrollView } from 'react-native';
import ModalItem from './ModalItem';
import { styles } from '../styles/styles';

export default function ModalLista({ isVisible, modalClose, itemLista }) {
  const valorLista = (itemLista) => {
    const maxQntExer = 150;
    const escalaNota = 100;
    let nivel = itemLista.nivel === 'Fácil' ? 1 : itemLista.nivel === 'Médio' ? 5 : 10;
    let val = itemLista.qntExerc * nivel * escalaNota / maxQntExer;
    return val.toLocaleString('pt-BR', { maximumFractionDigits: 1 });
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <View style={styles.modalCentered}>
        <View style={styles.modalContainer}>
          <View style={styles.modalCabecalho}>
            <Text style={styles.modalCabecalhoText} numberOfLines={1} adjustsFontSizeToFit>
              {itemLista.titulo}
            </Text>
            <Pressable onPress={modalClose}>
              <Text style={{ color: '#aaa' }}>✕</Text>
            </Pressable>
          </View>
          <View style={styles.modalLine}></View>
          <ScrollView style={styles.modalScrollView}>
            <View style={styles.modalCorpo}>
              <ModalItem label='Descrição' text={itemLista.descricao} />
              <ModalItem label='Nível de Dificuldade' text={itemLista.nivel} />
              <ModalItem label='Nº de Exercícios' text={itemLista.qntExerc} />
              <ModalItem label='Valor' text={valorLista(itemLista)} />
              <ModalItem label='Dica' text={itemLista.dica} />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}