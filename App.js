import { StatusBar } from 'expo-status-bar';
import {useState, useMemo} from 'react';
import {View , ImageBackground} from 'react-native';

import {Cabecalho, Corpo, Rodape} from './componentes';
import { styles } from './styles';

export default function App() {
  // Guarda todas as listas atualizadas
  const [listas, setListas] = useState([
    {
      id: 1,
      titulo: "Lista 1 - Ponto de Partida",
      isVisivel: true,
      descricao: "Calcule a distância em linha reta entre dois pontos representados no mapa, como se fossem duas praças ligadas por uma avenida reta.",
      nivel: "Fácil",
      qntExerc: 10,
      dica: "Use o Teorema de Pitágoras se os pontos formarem um triângulo retângulo no mapa.",
      resposta: ['a', 'a', 'b', 'b', 'b', 'c', 'b', 'b', 'b', 'b']
    },
    {
      id: 2,
      titulo: "Lista 2 - Caminhos Retos e Curvos",
      isVisivel: true,
      descricao: "Compare a distância de um trajeto em linha reta com a distância percorrida seguindo o contorno das ruas (em formato de L).",
      nivel: "Fácil",
      qntExerc: 5,
      dica: "Na rota em L, some os dois segmentos de reta. Na rota em linha reta, use Pitágoras.",
      resposta: ['d', 'a', 'b', 'c', 'b']
    },
    {
      id: 3,
      titulo: "Lista 3 - Triângulos no Caminho",
      isVisivel: false,
      descricao: "Dado um cruzamento em formato triangular, calcule a distância entre duas esquinas usando propriedades dos triângulos.",
      nivel: "Médio",
      qntExerc: 8,
      dica: "Verifique se o triângulo é retângulo ou se pode aplicar semelhança de triângulos.",
      resposta: ['b', 'b', 'a', 'c', 'c', 'c', 'b', 'b']
    },
    {
      id: 4,
      titulo: "Lista 4 - Rota do Explorador",
      isVisivel: false,
      descricao: "Um explorador precisa percorrer várias ruas formando um quadrilátero. Calcule a distância total percorrida.",
      nivel: "Médio",
      qntExerc: 14,
      dica: "Some os comprimentos de cada lado do polígono que representa a rota.",
      resposta: ['c', 'c', 'c', 'b','a', 'a', 'b', 'b', 'b', 'c', 'b', 'd', 'd', 'b']
    },
    {
      id: 5,
      titulo: "Lista 5 - A Grande Jornada",
      isVisivel: true,
      descricao: "Calcule a menor rota possível entre dois pontos distantes do mapa, analisando diferentes trajetos e escolhendo o mais curto.",
      nivel: "Difícil",
      qntExerc: 2,
      dica: "Compare a rota em linha reta com a soma de trechos pelas ruas. Considere que nem sempre a linha reta é viável.",
      resposta: ['a', 'c']
    }
  ]);

  const [pesq, setPesq] = useState(''); // Guarda o valor do input de pesquisa
  const [ID, setID] = useState(6);      // Guarda valo do id de nova lista
  
  // Lista gerada a partir da pesquisa ou da atualização da lista original
  const listaPesq = useMemo(() => {
    const palavra = pesq.toLowerCase().trim();

    // Retorna a lista original se nada for inserido no input de pesquisa
    if (palavra==='') {
      return listas;
    }

    // Retorna as palavras que contém a palavra digitada no input de pesquisa
    return listas.filter((lista) => 
      lista.titulo.toLowerCase().includes(palavra)
    );
      
  }, [listas, pesq]);
  
  const sections = useMemo(() => {
    // Criando as seções de Listas Visíveis e Não Visíveis
    const todasSections = [
    {
      title: 'Não Visível',
      data: listaPesq.filter(l => !l.isVisivel)
    },
    {
      title: 'Visível',
      data: listaPesq.filter(l => l.isVisivel)
    }
    ]
    return todasSections.filter(s => s.data.length>0);

  }, [listaPesq]);

  const handlePressAddLista = () => {
    // Adiciona uma nova lista de exercícios as listas
    const novaLista = {
      id: ID,
      titulo: `Lista ${ID}`,
      isVisivel: false,
      descricao: "Compare a distância de um trajeto em linha reta com a distância percorrida seguindo o contorno das ruas (em formato de L).",
      nivel: "Fácil",
      qntExerc: 5,
      dica: "Na rota em L, some os dois segmentos de reta. Na rota em linha reta, use Pitágoras.",
      resposta: ['d', 'a', 'b', 'c', 'b']
    }

    setListas(l => [...l, novaLista]);
    setID(id => id+1);
  }

  const handlePressLixeira = (id) => {
    // Cria uma nova lista sem a lista que foi selecionada para deleção
    const l = listas.filter(item => item.id !== id);
    setListas(l);
  }

  return (        
    <View style={{ flex: 1 }}>
      <View style={styles.top} />

      <View style={styles.screen}>
        <StatusBar style='dark' 
                   backgroundColor='#D0F5FF'/>

        <Cabecalho handlePressAddLista={handlePressAddLista}/>

        <ImageBackground source={require('./assets/fundo.png')}
                         resizeMode='cover'
                         style={styles.corpoFundo}>
          <Corpo sections={sections}
                 setPesq={setPesq}
                 handlePressLixeira={handlePressLixeira}/>
        </ImageBackground>

        <Rodape/>
      </View>

    </View>
  );
}