import { StyleSheet } from 'react-native';

// Cores fixas
const cores = {
    azul: '#8DD5E9',
    verde: '#B8EBCC',
    branco: '#FFFFFF'
}

export const styles = StyleSheet.create({
    top: {
        height: 38, // removi aspas
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
        paddingTop: 20
    },

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
        paddingLeft: 20,
        elevation: 2,
        borderRadius: 17,
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
        paddingVertical: 8,
        paddingHorizontal: 14,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: cores.branco
    },

    headerListas: {
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold'
    },

    corpoFundo: {
        flex: 1,
        width: '100%'
    },

    rodape: {
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        paddingBottom: 40,
        justifyContent: 'center',
        backgroundColor: cores.azul
    }
});
