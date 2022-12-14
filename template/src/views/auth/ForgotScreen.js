import { useNavigation } from '@react-navigation/native'
import react, { useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ErrorLabel from '../../components/ErrorLabel'
import InputField from '../../components/InputField'
import PrimaryButton from '../../components/PrimaryButton'
import Spacing from '../../components/Spacing'
import TopBar from '../../components/TopBar'
import { Post } from '../../network/network'
import Style from '../../style/Style'
import { validateEmail, validatePassword } from '../../utils/common'

export default LoginScreen = ({}) => {

    const navigation = useNavigation()

    const [validation, setValidation] = useState(false)
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState()
    const [error, setError] = useState()


    const onForgotPassword = ({}) => {
        if (!validateEmail(email)) {
            setValidation(true)
            return
        }

        setValidation(false)
        setError(false)
        setLoading(true)

        const endpoint = '/forgot-password'
        const data = {
            email,
        }
        Post(endpoint, data)
            .then((response) => {
                setLoading(false)
                console.log('Response', response)
            })
            .catch((error) => {
                setLoading(false)
                if (error.response) {
                    console.log(error.response.data)
                    setError(error.response.data.message)
                }
            })
    }

    return (
        <SafeAreaView style={[Style.container]}>
            <TopBar onPress={()=>navigation.goBack()}/>
            <View style={[Style.container,Style.hPadding,Style.centerJustify]}>
                <InputField
                    label={'Email'}
                    placeholder='example@gmail.com'
                    keyboard={'email-address'}
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text)
                    }}
                    error={
                        validation && !validateEmail(email)
                            ? 'Please add correct email'
                            : null
                    }
                />
                <Spacing val={10} />
                {loading && (
                    <>
                        <ActivityIndicator animating={true} />
                        <Spacing val={10} />
                    </>
                )}
                {error && (
                    <>
                        <ErrorLabel>{error}</ErrorLabel>
                        <Spacing val={10} />
                    </>
                )}

                <PrimaryButton onPress={onForgotPassword}>Forgot Password</PrimaryButton>
            </View>
        </SafeAreaView>
    )
}
