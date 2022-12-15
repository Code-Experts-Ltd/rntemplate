import react from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Color from '../style/Color'
import Style from '../style/Style'
import Spacing from './Spacing'

export default InputField = ({
    label,
    value,
    placeholder,
    keyboard,
    onChangeText,
    error,
    ...rest
}) => {
    return (
        <>
            <Text style={[Style.label, Style.colorSecondary]}>{label}</Text>
            <Spacing />
            <View style={style.container}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    {...rest}
                />
            </View>
            {error && (
                <>
                    <Spacing val={2} />
                    <Text style={[Style.subTitle, Style.colorError]}>
                        {error}
                    </Text>
                </>
            )}
        </>
    )
}

const style = StyleSheet.create({
    container: {
        borderColor: Color.secondary,
        borderWidth: 2,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
})
