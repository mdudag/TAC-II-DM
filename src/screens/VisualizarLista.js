import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';

import { Cabecalho } from '../components/Cabecalho';
// import { Rodape } from '../components/Rodape';
import { styles, cores } from '../styles/styles';

export function VisualizarLista({ navigation }) {
  const {item} = useRoute().params || {};

    const exercicios = (qnt) => {
    const arrayExer = Array(qnt).fill(null);

    return arrayExer.map((_, index) => (
        <View 
            key={index}
            style={{
                backgroundColor: cores.branco, 
                borderRadius: 15,
                padding: 10,
                marginTop: 10
            }}>
            <Text>Exercício {index + 1}</Text>
        </View>
    ));
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top} />

      <View style={styles.screen}>
        <StatusBar style='dark' backgroundColor='#D0F5FF'/>
    
        <Cabecalho titulo="Lista de Exercícios" 
                   handlePressBotaoEsq={() => navigation.goBack()}/>

        <ImageBackground source={require('../assets/fundo.png')}
                         resizeMode='cover'
                         style={styles.corpoFundo}>
          <View style={styles.corpoLista}>
            <ScrollView style={{flexGrow: 0}}>
              <View style={{backgroundColor: cores.branco, 
                            borderRadius: 20,
                            padding: 15,
                            marginBottom: 10}}>
                <View>
                  <Text style={{fontSize: 21}}>{item.titulo}</Text>
                </View>
                <View style={{marginTop: 20 }}>
                  <View style={{alignItems: 'center'}}>

                    <Text style={{fontSize: 16}}>Nível {item.nivel} - {item.qntExerc} exercícios</Text>
                  </View>
                  <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 16}}>{item.descricao}</Text>
                  </View>
                  <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 16}}>Dica: {item.dica}</Text>
                  </View>

                </View>
              </View>
              {exercicios(item.qntExerc)}
            </ScrollView>
            
          </View>                 
        </ImageBackground>

        {/* <Rodape/> */}
      </View>
    </View>
  );
}