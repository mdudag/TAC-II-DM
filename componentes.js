import {useState} from 'react';
import {Text, View, SectionList, Modal, Pressable, ScrollView, TextInput, Button} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
import {cores, styles} from './styles';

export function Cabecalho({handlePressAddLista}) {
    return(
    <View style={styles.cabecalho}>
        <Text style={styles.tituloCabecalho}
              // Se o texto for maior que o espaço:
              numberOfLines={1}     // Permite o texto em uma linha
              adjustsFontSizeToFit  // Diminui o tamanho da fonte para caber
              minimumFontScale={0.9} // Tamanho mínimo da fonte: até 90% menor
              ellipsizeMode='tail'  // Corta o texto e add reticências se for muito grande
              >
            Listas de Exercícios
        </Text>
        <Botao titulo="✛"
               onPress={handlePressAddLista}
               cor='transparent'
               estiloBotao={{paddingHorizontal: 10}} />
    </View>
    );
}

function Botao({
    titulo = 'Botão',
    onPress = () => {},
    cor = cores.branco,
    corPress = 'transparent',
    estiloBotao = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    estiloText = {
        color: '#000',
        fontSize: 16
    },
    icone = null
}) {
    return(
        <Pressable onPress={onPress}
                   style={({pressed}) => [ {
                    backgroundColor: cor? (pressed? corPress: cor): 'transparent'
                   }, estiloBotao]}>
            {icone && <Text>{icone}</Text>}
            {titulo? <Text style={estiloText}>{titulo}</Text>: null}
        </Pressable>
    );
}

// ================== CORPO ===================

export function Corpo({sections, setPesq, handlePressLixeira}) {
  return(
    <View style={styles.corpo}>
        <BarraConsulta placeholder={'🔍 Pesquise uma lista'} 
                       setPesq={setPesq}/>
        <ResultadoListas sections={sections} 
                         handlePressLixeira={handlePressLixeira}/>
    </View>
  );
}

// ================== Área da Barra de Consulta ==================

function BarraConsulta({placeholder, setPesq}) {
    return(
        <View style={styles.barraConsulta}>
            <TextInput style={styles.textInput} 
                       placeholder={placeholder}
                       onChangeText={setPesq}/>
        </View>
    );
}

// ================== Área dos Resultados das Listas ==================

function ResultadoListas({sections, handlePressLixeira}) {
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
                    <Botao titulo="🗑️"
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
            <ModalLista isVisible={isVisible} modalClose={modalClose} itemLista={itemLista}/>
        </View>
    );
}

// ================== Modal de uma Lista ==================

function ModalLista({isVisible, modalClose, itemLista}) {
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
                        <Botao titulo="✕"
                               onPress={modalClose}
                               cor='transparent'
                               estiloBotao={{paddingHorizontal: 10}} 
                               estiloText={{color: cores.cinza}}/>
                    </View>

                  <View style={styles.modalLine}></View>
                    <ScrollView style={styles.modalScrollView}>
                        <View style={styles.modalCorpo}>
                            <ModalItem label='Descrição' text={itemLista.descricao}/>
                            <ModalItem label='Nível de Dificuldade' text={itemLista.nivel}/>
                            <ModalItem label='Nº de Exercícios' text={itemLista.qntExerc}/>
                            <ModalItem label='Valor' text={valorLista(itemLista)}/>
                            <ModalItem label='Dica' text={itemLista.dica}/>
                            <ModalItem label='Gabarito' 
                                    text={itemLista.resposta?.join(' | ') || 'Sem Gabarito'}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

function ModalItem({label, text}) {
    return(
        <View style={styles.modalItem}>
            <Text style={styles.modalItemLabel}>{label}:
                <Text style={styles.modalItemText}> {text}</Text>
            </Text>
        </View>
    );
}

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

// ================== RODAPÉ ==================

export function Rodape() {
    const cor=cores.azul,padding=17, marginHorizontal=8,borderRadius=40;

    return(
        <View style={styles.rodape}>
            <Botao titulo="🏚️"
                   cor={cor}
                   estiloBotao={{padding: padding,
                                 marginHorizontal: marginHorizontal,
                                 borderRadius: borderRadius}} />
            <Botao titulo="🗺️"
                   cor={cor}
                   estiloBotao={{padding: padding,
                                 marginHorizontal: marginHorizontal,
                                 borderRadius: borderRadius}} />
            <Botao titulo="📋"
                   cor={cor}
                   estiloBotao={{padding: padding,
                                 marginHorizontal: marginHorizontal,
                                 borderRadius: borderRadius}} />
            <Botao titulo="✏️"
                   cor={cor}
                   estiloBotao={{padding: padding,
                                 marginHorizontal: marginHorizontal,
                                 borderRadius: borderRadius}} />
            <Botao titulo="👤"
                   cor={cor}
                   estiloBotao={{padding: padding,
                                 marginHorizontal: marginHorizontal,
                                 borderRadius: borderRadius}} />
        </View>
    );
}