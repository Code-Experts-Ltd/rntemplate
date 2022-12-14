import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthRouter from './src/router/AuthRouter'
import HomeTabs from './src/router/HomeTabs'
import SplashScreen from './src/views/splash/SplashScreen'

const Stack = createNativeStackNavigator()

export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen
                    name='Splash'
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Auth'
                    component={AuthRouter}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='HomeTabs'
                    component={HomeTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
