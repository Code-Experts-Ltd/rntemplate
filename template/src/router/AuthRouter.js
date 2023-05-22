import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ForgotScreen from '../views/auth/ForgotScreen'
import LoginScreen from '../views/auth/LoginScreen'
import SignupScreen from '../views/auth/SignupScreen'

const Stack = createNativeStackNavigator()

export default AuthRouter = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                options={{
                    headerShown: false,
                }}
                component={LoginScreen}
            />
            <Stack.Screen
                name='Signup'
                options={{
                    headerShown: false,
                }}
                component={SignupScreen}
            />
            <Stack.Screen
                name='ForgotPassword'
                options={{
                    headerShown: false,
                }}
                component={ForgotScreen}
            />
        </Stack.Navigator>
    )
}
