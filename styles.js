import {StyleSheet} from 'react-native';

// Cores fixas
const cores = {
    azul: '#8DD5E9',
    verde: '#B8EBCC',
    branco: '#FFFFFF'
}

export const styles = StyleSheet.create({
    top: {
        height: '38',
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
        height: '10%',
        // justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 20,
        paddingBottom: 5,
        backgroundColor: cores.azul
    },

    corpo: {
        flex: 1,
        width: '100%',
        height: '75%',
        alignItems: 'center',
        paddingTop: '20',
        fontFamily: 'Arial'
    },

    barraConsulta: {
        // height: '10%',
        width: '80%',
        flexDirection: 'row',
        // justifyContent: 'space-around',
        // height: '10%',
        // width: '90%',
        marginTop: 10,
        marginBottom: 30,
        alignItems: 'center',
        // paddingHorizontal: 30,
        // backgroundColor: cores.branco
        // borderWidth: 2
    },

    textInput: {
        flex: 1,
        height: 37,
        // width: '20%',
        // borderWidth: 1,
        paddingLeft: 20,
        // marginRight: 10,
        elevation: 2,
        borderRadius: 17,
        // borderColor: 'blue',
        backgroundColor: cores.branco
    },

    resultado: {
        height: '87%',
        width: '90%'
    },

    barraLista: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: '8',
        paddingHorizontal: '14',
        marginBottom: '10',
        borderColor: 'blue',
        borderRadius: 10,
        elevation: 2,
        backgroundColor: cores.branco
    },

    headerListas: {
        marginBottom: '10',
        marginTop: '10',
        // fontSize: 16,
        fontWeight: 'bold'
    },

    corpoFundo: {
        flex: 1,    // Ocupa todo o espaço do corpo
        width: '100%'
    },

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
        fontWeight: 'bold'
    },

    modalItemText: {
        fontSize: 15,
        fontWeight: 'normal'
    },

    rodape: {
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        paddingBottom: 40,
        justifyContent: 'center',
        // paddingBottom: '20',
        backgroundColor: cores.azul
    }
});