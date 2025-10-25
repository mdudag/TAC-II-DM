import {StyleSheet} from 'react-native';

// Cores fixas
export const cores = {
  azul: '#8DD5E9',
  verde: '#B8EBCC',
  branco: '#FFFFFF',
  cinza: '#aaa',
  corIcons: '#252525ff'
}

export const styles = StyleSheet.create({
  top: {
    height: 35,
    backgroundColor: '#D0F5FF'
  },

  screen: {
    backgroundColor: '#D0F5FF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  cabecalho: {
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 20,
    paddingBottom: 5,
    backgroundColor: cores.azul
  },

  tituloCabecalho: {
    flex: 1,
    fontSize: 19, 
    fontWeight: 'bold',
    color: cores.corIcons
    // marginRight: 15, // ADICIONE ESTA LINHA para dar espaço
  },

  botao: {
    paddingHorizontal: 10,
  },

  corpo: {
    flex: 1,
    width: '100%',
    height: '77%',
    alignItems: 'center',
    paddingTop: 20
  },

  /*************** Barra de consulta ***************/

  barraConsulta: {
    width: '80%',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    height: 37,
    paddingHorizontal: 20,
    elevation: 2,
    borderRadius: 17,
    backgroundColor: cores.branco
  },

  /*************** Área de resultados das listas ***************/

  resultado: {
    height: '87%',
    width: '90%'
  },

  barraLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    paddingLeft: 14,
    marginBottom: 10,
    borderColor: 'blue',
    borderRadius: 10,
    elevation: 2,
    backgroundColor: cores.branco,
    color: cores.corIcons
  },

  headerListas: {
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
    color: cores.corIcons
  },

  corpoFundo: {
    flex: 1,    // Ocupa todo o espaço do corpo
    width: '100%'
  },

  /************** Modal **************/

  modalCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131313c4', // Fundo escurecido translúcido
  },

  modalContainer: {
    flexDirection: 'column',
    width: '85%',   
    height: '40%',  
    paddingVertical: 20,  
    borderRadius: 12,
    elevation: 5,       // sombra
    backgroundColor: cores.branco,
  },

  modalCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  modalCabecalhoText: {
    width: '90%',
    fontSize: 19,
    fontWeight: 'bold',
    color: cores.corIcons
  },

  modalLine: {
    borderBottomWidth: 1, 
    borderBottomColor: '#EEE6E6', 
    marginVertical: 20
  },

  modalScrollView: {
    flexGrow: 0
  },

  modalCorpo: {
    paddingHorizontal: 20
  },

  modalItem: {
    flexDirection: 'row',
    marginBottom: 15
  },

  modalItemLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: cores.corIcons
  },

  modalItemText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: cores.corIcons
  },

  /************** Rodapé **************/

  rodape: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    paddingBottom: 40,
    justifyContent: 'center',
    backgroundColor: cores.azul,
  },

  /************** Modal de Adicionar Listas **************/

  inputContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },

  textInputModal: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: cores.branco,
  },

  botoesNivel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  botaoNivel: {
    flex: 1,
    padding: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8DD5E9',
    alignItems: 'center',
    backgroundColor: cores.branco,
  },

  botaoNivelSelecionado: {
    backgroundColor: cores.azul,
    borderColor: cores.azul,
  },

  textoBotaoNivel: {
    color: cores.azul,
    fontWeight: '500',
  },

  textoBotaoNivelSelecionado: {
    color: cores.branco,
    fontWeight: 'bold',
  },

  botoesAcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },

  botaoCancelar: {
    flex: 1,
    padding: 15,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    backgroundColor: cores.branco,
  },

  botaoSalvar: {
    flex: 1,
    padding: 15,
    marginLeft: 10,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: cores.verde,
  },

  textoBotaoCancelar: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 16,
  },

  textoBotaoSalvar: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  }
});