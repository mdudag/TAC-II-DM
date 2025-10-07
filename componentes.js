import { useEffect, useState } from 'react';
import { Text, View, SectionList, Modal, Pressable, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// ================== CABEÇALHO ==================

export function Cabecalho({ handlePressAddLista }) {
    return (
        <View style={styles.cabecalho}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', flex: 1 }}>Listas de Exercícios</Text>
            <ButtonStyle title=' ✛ ' onPress={handlePressAddLista} />
        </View>
    );
}

// ================== CORPO ===================

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
}

// ================== BARRA DE CONSULTA ==================

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
        </View>
    );
}

// ================== RESULTADOS DAS LISTAS ==================

function ResultadoListas({ listas, sections, handlePressLixeira }) {
    const [isVisible, setIsVisible] = useState(false);
    const [itemLista, setItemLista] = useState({});

    const modalOpen = (item) => {
        setItemLista(item);
        setIsVisible(true);
    };

    const modalClose = () => {
        setIsVisible(false);
    };

    return (
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

function ModalItem({ label, text }) {
    return (
        <View style={styles.modalItem}>
            <Text style={styles.modalItemLabel}>
                {label}:<Text style={styles.modalItemText}> {text}</Text>
            </Text>
        </View>
    );
}

// ================== RODAPÉ ==================

export function ButtonStyle({ title, onPress }) {
    return (
        <View style={{ marginRight: 10 }}>
            <Button title={title} color='#8DD5E9' onPress={onPress} />
        </View>
    );
}

export function Rodape() {
    return (
        <View style={styles.rodape}>
            <ButtonStyle title=' 🏚️ ' />
            <ButtonStyle title=' 🗺️ ' />
            <View style={{ marginRight: 10 }}>
                <Button title=' 📋 ' color='#B8EBCC' />
            </View>
            <ButtonStyle title=' ✏️ ' />
            <ButtonStyle title=' 👤 ' />
        </View>
    );
}
