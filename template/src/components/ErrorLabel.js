import react from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Style from '../style/Style'

export default ErrorLabel = ({ children }) => {
    return (
        <>
            <Text style={[Style.subTitle, Style.colorError]}>{children}</Text>
        </>
    )
}
