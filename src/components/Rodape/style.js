import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    rodape: {
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        paddingBottom: 40,
        justifyContent: 'center',
        // paddingBottom: '20',
        backgroundColor: colors.azul
    }
});