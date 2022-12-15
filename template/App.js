import react from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default App = ({ }) => {

  return(
    <>
      <View style={style.container}>
        <Text>Code My Love</Text>
      </View>
    </>
  )

}

const style = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  }
})