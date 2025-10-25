import { Text, View, Modal, ScrollView } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"

import { Botao } from './Botao';
import { ModalItem } from './ModalItem';
import { styles, cores } from '../styles/styles';

export function ModalLista({isVisible, modalClose, itemLista}) {
  const valorLista = (itemLista) => {
    // Peso dos níveis: facil=1, médio=5, difícil=10
    const maxQntExer = 150;    // qnt max de exercício * difícil = 15 * 10
    const escalaNota = 100;
    let nivel, val;
    
    nivel = 
      itemLista.nivel==='Fácil'? 1:
      itemLista.nivel==='Médio'? 5: 
      10;

    val = itemLista.qntExerc * nivel * escalaNota / maxQntExer;
    return val.toLocaleString('pt-BR', {maximumFractionDigits: 1}); // Formatando valor
  }
  
  return(
    <Modal visible={isVisible}
           transparent={true}
           animationType='fade'>
      <View style={styles.modalCentered}>
        <View style={styles.modalContainer}>
          <View style={styles.modalCabecalho}>
            <Text style={styles.modalCabecalhoText}
                // Se o texto for maior que o espaço:
                  numberOfLines={1}     // Permite o texto em uma linha
                  adjustsFontSizeToFit  // Diminui o tamanho da fonte para caber
                  minimumFontScale={0.8} // Tamanho mínimo da fonte: até 80% menor
                  ellipsizeMode='tail'  // Corta o texto e add reticências se for muito grande
                  > {itemLista.titulo}
            </Text>
            <Botao icone={<MaterialIcons name="close" size={21} color={cores.cinza} />}
                   onPress={modalClose}
                   cor='transparent'
                   estiloBotao={{paddingHorizontal: 10}}/>
          </View>

          <View style={styles.modalLine}></View>
            <ScrollView style={styles.modalScrollView}>
              <View style={styles.modalCorpo}>
                <ModalItem label='Descrição' 
                           text={itemLista.descricao}/>
                <ModalItem label='Nível de Dificuldade' 
                           text={itemLista.nivel}/>
                <ModalItem label='Nº de Exercícios' 
                           text={itemLista.qntExerc}/>
                <ModalItem label='Valor' 
                           text={valorLista(itemLista)}/>
                <ModalItem label='Dica' 
                           text={itemLista.dica}/>
                <ModalItem label='Gabarito' 
                           text={itemLista.resposta?.join(' | ') || 'Sem Gabarito'}/>
              </View>
            </ScrollView>
        </View>
      </View>
    </Modal>
  );
}