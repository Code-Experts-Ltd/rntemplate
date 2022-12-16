import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../views/user-profile/Profile'
import HomeDrawer from './HomeDrawer'

const Stack = createNativeStackNavigator()

export default HomeRouter = () => {
    return (
        <Stack.Navigator initialRouteName='HomeDrawer'>
            <Stack.Screen
                name='HomeDrawer'
                component={HomeDrawer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Profile'
                options={{
                    headerShown: false,
                }}
                component={Profile}
            />
        </Stack.Navigator>
    )
}
