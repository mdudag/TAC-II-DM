import React, { useState } from 'react';
import { Modal, View, Text, Pressable, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles, cores } from '../styles/styles';

export default function ModalAdicionarLista({ isVisible, modalClose, onAdicionarLista }) {
  const [novaLista, setNovaLista] = useState({
    titulo: '',
    descricao: '',
    nivel: 'Fácil',
    qntExerc: '',
    dica: ''
  });

  const handleSalvar = () => {
    if (!novaLista.titulo.trim()) {
      alert('Por favor, insira um título para a lista');
      return;
    }

    const listaCompleta = {
      ...novaLista,
      id: Date.now(), // ID único baseado no timestamp
      isVisivel: false,
      qntExerc: parseInt(novaLista.qntExerc) || 0,
      resposta: [] // Array vazio de respostas
    };

    onAdicionarLista(listaCompleta);
    setNovaLista({
      titulo: '',
      descricao: '',
      nivel: 'Fácil',
      qntExerc: '',
      dica: ''
    });
    modalClose();
  };

  const handleCancelar = () => {
    setNovaLista({
      titulo: '',
      descricao: '',
      nivel: 'Fácil',
      qntExerc: '',
      dica: ''
    });
    modalClose();
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType='slide'>
      <View style={styles.modalCentered}>
        <View style={[styles.modalContainer, { height: '70%' }]}>
          <View style={styles.modalCabecalho}>
            <Text style={styles.modalCabecalhoText}>Nova Lista de Exercícios</Text>
            <Pressable onPress={handleCancelar}>
              <Text style={{ color: '#aaa', fontSize: 18 }}>✕</Text>
            </Pressable>
          </View>
          <View style={styles.modalLine}></View>
          
          <ScrollView style={styles.modalScrollView}>
            <View style={styles.modalCorpo}>
              
              {/* Título */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Título *</Text>
                <TextInput
                  style={styles.textInputModal}
                  placeholder="Digite o título da lista"
                  value={novaLista.titulo}
                  onChangeText={(text) => setNovaLista({...novaLista, titulo: text})}
                />
              </View>

              {/* Descrição */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                  style={[styles.textInputModal, { height: 80 }]}
                  placeholder="Digite a descrição da lista"
                  value={novaLista.descricao}
                  onChangeText={(text) => setNovaLista({...novaLista, descricao: text})}
                  multiline
                  numberOfLines={4}
                />
              </View>

              {/* Nível de Dificuldade */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Nível de Dificuldade</Text>
                <View style={styles.botoesNivel}>
                  {['Fácil', 'Médio', 'Difícil'].map((nivel) => (
                    <TouchableOpacity
                      key={nivel}
                      style={[
                        styles.botaoNivel,
                        novaLista.nivel === nivel && styles.botaoNivelSelecionado
                      ]}
                      onPress={() => setNovaLista({...novaLista, nivel})}
                    >
                      <Text style={[
                        styles.textoBotaoNivel,
                        novaLista.nivel === nivel && styles.textoBotaoNivelSelecionado
                      ]}>
                        {nivel}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Quantidade de Exercícios */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Número de Exercícios</Text>
                <TextInput
                  style={styles.textInputModal}
                  placeholder="Digite a quantidade"
                  value={novaLista.qntExerc}
                  onChangeText={(text) => setNovaLista({...novaLista, qntExerc: text.replace(/[^0-9]/g, '')})}
                  keyboardType="numeric"
                />
              </View>

              {/* Dica */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Dica</Text>
                <TextInput
                  style={[styles.textInputModal, { height: 60 }]}
                  placeholder="Digite uma dica para a lista"
                  value={novaLista.dica}
                  onChangeText={(text) => setNovaLista({...novaLista, dica: text})}
                  multiline
                  numberOfLines={3}
                />
              </View>

              {/* Botões */}
              <View style={styles.botoesAcao}>
                <TouchableOpacity style={styles.botaoCancelar} onPress={handleCancelar}>
                  <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
                  <Text style={styles.textoBotaoSalvar}>Salvar Lista</Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}