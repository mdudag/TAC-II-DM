<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { Text, View, SectionList, Modal, Pressable, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// ================== CABEÇALHO ==================

export function Cabecalho({ handlePressAddLista }) {
    return (
        <View style={styles.cabecalho}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', flex: 1 }}>Listas de Exercícios</Text>
            <ButtonStyle title=' ✛ ' onPress={handlePressAddLista} />
=======
import {useState} from 'react';
import {Text, View, SectionList, Modal, Pressable, ScrollView, TextInput, Button} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
import {cores, styles} from './styles';

export function Cabecalho({handlePressAddLista}) {
    return(
    <View style={styles.cabecalho}>
        <Text style={styles.tituloCabecalho}>Listas de Exercícios</Text>
        <ButtonStyle title=' ✛ ' onPress={handlePressAddLista}/>
    </View>
    );
}

function ButtonStyle({title, onPress}) {
    return(
        <View style={{marginRight: 10}}>
            <Button title={title}
                    color={cores.azul}
                    onPress={onPress}/>
>>>>>>> b7525389f3d4db616d6dabf4d8470ddac2a486ca
        </View>
    );
}

// ================== CORPO ===================

<<<<<<< HEAD
export function Corpo({ listas, setListas, sections, listaPesq, setListaPesq }) {
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
=======
export function Corpo({sections, setPesq, handlePressLixeira}) {
  return(
    <View style={styles.corpo}>
        <BarraConsulta placeholder={'🔍 Pesquise uma lista'} 
                       setPesq={setPesq}/>
        <ResultadoListas sections={sections} 
                         handlePressLixeira={handlePressLixeira}/>
    </View>
  );
>>>>>>> b7525389f3d4db616d6dabf4d8470ddac2a486ca
}

// ================== BARRA DE CONSULTA ==================

<<<<<<< HEAD
function BarraConsulta({ placeholder, pesq, setPesq, listas, setListaPesq }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            buscarListas();
        }, 300);

        return () => clearTimeout(timer);
    }, [pesq]);

    const buscarListas = () => {
        const palavra = pesq.toLowerCase().trim();

        if (palavra === '') {
            setListaPesq(listas);
        } else {
            const resultPesq = listas.filter((lista) =>
                lista.titulo.toLowerCase().includes(palavra)
            );
            setListaPesq(resultPesq);
        }
    };

    return (
        <View style={[styles.barraConsulta, { flexDirection: 'row', alignItems: 'center' }]}>
            <TextInput

                style={[styles.textInput, { flex: 1 }]}
                placeholder={placeholder}
                value={pesq}
                onChangeText={setPesq}
            />

            {/* Botão X para limpar texto */}
            {pesq.length > 0 && (
                <TouchableOpacity onPress={() => setPesq('')}>
                    <Text style={{ fontSize: 18, color: '#666', marginLeft: 8 }}>✖</Text>
                </TouchableOpacity>
            )}
=======
function BarraConsulta({placeholder, setPesq}) {
    return(
        <View style={styles.barraConsulta}>
            <TextInput style={styles.textInput} 
                       placeholder={placeholder}
                       onChangeText={setPesq}/>
>>>>>>> b7525389f3d4db616d6dabf4d8470ddac2a486ca
        </View>
    );
}

// ================== RESULTADOS DAS LISTAS ==================

<<<<<<< HEAD
function ResultadoListas({ listas, sections, handlePressLixeira }) {
=======
function ResultadoListas({sections, handlePressLixeira}) {
>>>>>>> b7525389f3d4db616d6dabf4d8470ddac2a486ca
    const [isVisible, setIsVisible] = useState(false);
    const [itemLista, setItemLista] = useState({});

    const modalOpen = (item) => {
        setItemLista(item);
        setIsVisible(true);
    };

    const modalClose = () => {
        setIsVisible(false);
    };

<<<<<<< HEAD
    return (
=======
    const renderLista = ({item, modalOpen, handlePressLixeira}) => {
        return(
        <View style={styles.barraLista}>
                <View style={{flex: 1}}>
                    <Pressable onPress={() => modalOpen(item)}>
                        <Text>{item.titulo}</Text>
                    </Pressable>
                </View>
                <View style={{flexDirection: 'row', marginLeft: '14'}}>
                    {/* <Text style={{marginRight: '10'}}>✏️</Text> */}
                    {/* <Text>🗑️ </Text> */}
                    <Button title='🗑️'
                            color={cores.branco}
                            onPress={() => handlePressLixeira(item.id)}/>
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
>>>>>>> b7525389f3d4db616d6dabf4d8470ddac2a486ca
        <View style={styles.resultado}>
            <SectionList
                sections={sections}
                keyExtractor={lista => lista.id.toString()}
                renderItem={({ item }) => renderLista({ item, modalOpen, handlePressLixeira })}
                renderSectionHeader={renderSectionLista}
                stickySectionHeadersEnabled={false}
            />
            <ModalLista isVisible={isVisible} modalClose={modalClose} itemLista={itemLista} />
        </View>
    );
}

<<<<<<< HEAD
const renderLista = ({ item, modalOpen, handlePressLixeira }) => {
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
                    color='#ffffffff'
                    onPress={() => handlePressLixeira(item.id)}
                />
            </View>
        </View>
    );
};

const renderSectionLista = ({ section: { title } }) => {
    return <Text style={styles.headerListas}>{title}</Text>;
};

// ================== MODAL ==================

const valorLista = (itemLista) => {
    const maxQntExer = 150;
    const escalaNota = 100;
    let nivel, val;

    nivel =
        itemLista.nivel === 'Fácil' ? 1 :
            itemLista.nivel === 'Médio' ? 5 :
                10;

    val = itemLista.qntExerc * nivel * escalaNota / maxQntExer;
    return val.toLocaleString('pt-BR', { maximumFractionDigits: 1 });
};

function ModalLista({ isVisible, modalClose, itemLista }) {
    return (
        <Modal visible={isVisible} transparent={true} animationType='fade'>
=======
// ================== Modal de uma Lista ==================

function ModalLista({isVisible, modalClose, itemLista}) {
    return(
        <Modal visible={isVisible}
               transparent={true}
               animationType='fade'>
>>>>>>> b7525389f3d4db616d6dabf4d8470ddac2a486ca
            <View style={styles.modalCentered}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCabecalho}>
                        <Text
                            style={styles.modalCabecalhoText}
                            numberOfLines={1}
                            adjustsFontSizeToFit
                        >
                            {itemLista.titulo}
                        </Text>
                        <Pressable onPress={modalClose}>
                            <Text style={{ color: '#aaa' }}>✕</Text>
                        </Pressable>
                    </View>

                    <View style={styles.modalLine}></View>
                    <ScrollView style={styles.modalScrollView}>
                        <View style={styles.modalCorpo}>
<<<<<<< HEAD
                            <ModalItem label='Descrição' text={itemLista.descricao} />
                            <ModalItem label='Nível de Dificuldade' text={itemLista.nivel} />
                            <ModalItem label='Nº de Exercícios' text={itemLista.qntExerc} />
                            <ModalItem label='Valor' text={valorLista(itemLista)} />
                            <ModalItem label='Dica' text={itemLista.dica} />
=======
                            <ModalItem label='Descrição' text={itemLista.descricao}/>
                            <ModalItem label='Nível de Dificuldade' text={itemLista.nivel}/>
                            <ModalItem label='Nº de Exercícios' text={itemLista.qntExerc}/>
                            <ModalItem label='Valor' text={valorLista(itemLista)}/>
                            <ModalItem label='Dica' text={itemLista.dica}/>
                            <ModalItem label='Gabarito' 
                                    text={itemLista.resposta?.join(' | ') || 'Sem Gabarito'}/>
>>>>>>> b7525389f3d4db616d6dabf4d8470ddac2a486ca
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

function ModalItem({ label, text }) {
    return (
        <View style={styles.modalItem}>
            <Text style={styles.modalItemLabel}>
                {label}:<Text style={styles.modalItemText}> {text}</Text>
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

<<<<<<< HEAD
export function ButtonStyle({ title, onPress }) {
    return (
        <View style={{ marginRight: 10 }}>
            <Button title={title} color='#8DD5E9' onPress={onPress} />
        </View>
    );
}
=======
export function Rodape() {
>>>>>>> b7525389f3d4db616d6dabf4d8470ddac2a486ca

export function Rodape() {
    return (
        <View style={styles.rodape}>
<<<<<<< HEAD
            <ButtonStyle title=' 🏚️ ' />
            <ButtonStyle title=' 🗺️ ' />
            <View style={{ marginRight: 10 }}>
                <Button title=' 📋 ' color='#B8EBCC' />
=======
            <ButtonStyle title=' 🏚️ '/>
            <ButtonStyle title=' 🗺️ '/>
            <View style={{marginRight: 10}}>
                <Button title=' 📋 '
                        color={cores.verde}/>
>>>>>>> b7525389f3d4db616d6dabf4d8470ddac2a486ca
            </View>
            <ButtonStyle title=' ✏️ ' />
            <ButtonStyle title=' 👤 ' />
        </View>
    );
}
