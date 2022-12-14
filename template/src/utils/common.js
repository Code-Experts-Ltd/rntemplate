import AsyncStorage from '@react-native-async-storage/async-storage'

export const validateEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    return reg.test(email)
}
export const validatePassword = (password) => {
    return password && password.length >= 5
}

export const getUserToken = async () => {
    const token = await AsyncStorage.getItem('token')
    if (!token) return ''
    const data = JSON.parse(value)
    return `Bearer ${data}`
}
