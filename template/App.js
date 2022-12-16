import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import store from './src/app/store'
import AuthRouter from './src/router/AuthRouter'
import HomeDrawer from './src/router/HomeDrawer'
import HomeTabs from './src/router/HomeTabs'
import SplashScreen from './src/views/splash/SplashScreen'
import Profile from './src/views/user-profile/Profile'
import HomeRouter from './src/router/HomeRouter'

const Stack = createNativeStackNavigator()

export default App = () => {
    return (
        <Provider store={store}>
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
                        name='HomeRouter'
                        component={HomeRouter}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
