import react from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../style/Color'
import Style from '../style/Style'

export default PrimaryButton = ({ onPress, children }) => {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={style.container}>
                <Text style={[Style.label, Style.colorWhite]}>{children}</Text>
            </TouchableOpacity>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Color.secondary,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
})
