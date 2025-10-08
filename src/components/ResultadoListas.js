import React, { useState } from 'react';
import { View, Text, SectionList, Pressable, Button } from 'react-native';
import ModalLista from './ModalLista';
import { styles } from '../styles/styles';

export default function ResultadoListas({ sections, handlePressLixeira }) {
    const [isVisible, setIsVisible] = useState(false);
    const [itemLista, setItemLista] = useState({});

    const modalOpen = (item) => {
        setItemLista(item);
        setIsVisible(true);
    };
    const modalClose = () => setIsVisible(false);

    return (
        <View style={styles.resultado}>
            <SectionList
                sections={sections}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.barraLista}>
                        <View style={{ flex: 1 }}>
                            <Pressable onPress={() => modalOpen(item)}>
                                <Text>{item.titulo}</Text>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 14 }}>
                            <Button title='🗑️' color='#ffffffff' onPress={() => handlePressLixeira(item.id)} />
                        </View>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.headerListas}>{title}</Text>
                )}
                stickySectionHeadersEnabled={false}
            />
            <ModalLista isVisible={isVisible} modalClose={modalClose} itemLista={itemLista} />
        </View>
    );
}
