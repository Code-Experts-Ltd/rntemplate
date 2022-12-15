import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import Logo from '../assets/logo.svg'
import Color from '../style/Color'

export default TopBar = ({ onPress, onSkip }) => {
    const navigation = useNavigation()

    const onClick = () => navigation.goBack()
    return (
        <View style={Style.container}>
            <TouchableOpacity onPress={onPress || onClick}>
                <Image source={require('../assets/arrow-back.png')} />
            </TouchableOpacity>

            <Logo />
            <TouchableOpacity
                style={{ opacity: onSkip ? 1 : 0 }}
                onPress={onSkip}
            >
                <Text>Skip</Text>
            </TouchableOpacity>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: StatusBar.currentHeight,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 1,
        marginBottom: 10,
        backgroundColor: Color.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
})
