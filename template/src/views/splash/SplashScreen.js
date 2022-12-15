import { useNavigation } from '@react-navigation/native'
import react, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Color from '../../style/Color'

export default SplashScreen = ({}) => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Auth' }],
            })
        }, 1000)
    })
    return (
        <>
            <View style={style.container}></View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.primary,
    },
})
