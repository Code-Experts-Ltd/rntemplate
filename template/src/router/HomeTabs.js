import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../views/home/HomeScreen'
import SettingScreen from '../views/home/SettingScreen'

const Tab = createBottomTabNavigator()

export default HomeTabs = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Setting' component={SettingScreen} />
        </Tab.Navigator>
    )
}
