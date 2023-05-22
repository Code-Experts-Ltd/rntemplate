import react from 'react'
import { View } from 'react-native'

export default Spacing = ({ type, val = 5 }) => {
    return <View style={type === 'h' ? { width: val } : { height: val }} />
}
