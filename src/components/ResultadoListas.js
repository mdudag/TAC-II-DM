import { useState } from 'react';
import { Text, View, SectionList, Pressable } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"

import { Botao } from './Botao';
import { ModalLista } from './ModalLista';
import { cores, styles } from '../styles/styles';

export function ResultadoListas({sections, handlePressLixeira}) {
  const [isVisible, setIsVisible] = useState(false);
  const [itemLista, setItemLista] = useState({});

  const modalOpen = (item) => {
    setItemLista(item);
    setIsVisible(true);
  }

  const modalClose = () => {
    setIsVisible(false);
  }

  const renderLista = ({item, modalOpen, handlePressLixeira}) => {
    return(
      <View style={styles.barraLista}>
        <View style={{flex: 1}}>
          <Pressable onPress={() => modalOpen(item)}>
            <Text // Se o texto for maior que o espaço:
                  numberOfLines={1}     // Permite o texto em uma linha
                  minimumFontScale={0.9} // Tamanho mínimo da fonte: até 90% menor
                  ellipsizeMode='tail'  // Corta o texto e add reticências se for muito grande
            >
              {item.titulo}
            </Text>
          </Pressable>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 14}}>
          <Botao icone={<MaterialIcons name="delete-outline" size={24} color={cores.corIcons} />}
                          onPress={() => handlePressLixeira(item.id)}
                          cor='transparent'
                          estiloBotao={{paddingHorizontal: 14}} />
      </View>
      </View> 
    );
  }

  const renderSectionLista = ({section: {title}}) => {
    return(
      <Text style={styles.headerListas}>{title}</Text>
    );
  }

  return(
    <View style={styles.resultado}>
      <SectionList sections={sections}
                   keyExtractor={lista => lista.id.toString()}
                   renderItem={({item}) => renderLista({item, modalOpen, handlePressLixeira})}  
                   renderSectionHeader={renderSectionLista}
                   stickySectionHeadersEnabled={false}
      />
      <ModalLista isVisible={isVisible} 
                  modalClose={modalClose} 
                  itemLista={itemLista}/>
    </View>
  );
}