import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Color from '../style/Color';
import Style from '../style/Style';

export default SecondaryButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity style={ButtonStyle.container} onPress={onPress}>
            <Text style={[Style.fontBold, ButtonStyle.label]}>{children}</Text>
        </TouchableOpacity>
    );
};

const ButtonStyle = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Color.primary,
        borderWidth: 2,
    },
    label: {
        color: Color.primary,
        fontSize: 16,
    },
});
