import { StyleSheet } from 'react-native';
import Color from './Color';

export default Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    centerJustify: {
        justifyContent: 'center',
    },
    hPadding: {
        paddingHorizontal: 20,
    },

    colorSecondary: {
        color: Color.secondary,
    },
    colorPrimary: {
        color: Color.primary,
    },
    colorBlack: {
        color: Color.black,
    },
    colorWhite: {
        color: Color.white,
    },
    colorError: {
        color: Color.red,
    },
    label: {
        fontSize: 15,
    },
    subTitle: {
        fontSize: 10,
    },
    subLabel: {
        fontSize: 12,
    },

    fontBold: {
        fontWeight: 'bold',
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
});
