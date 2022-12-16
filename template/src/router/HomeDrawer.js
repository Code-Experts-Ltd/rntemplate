import { createDrawerNavigator } from '@react-navigation/drawer'
import MyDrawer from '../components/Drawer'
import HomeTabs from './HomeTabs'

const Drawer = createDrawerNavigator()

export default HomeDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={(props) => <MyDrawer {...props} />}
        >
            <Drawer.Screen name='Home' component={HomeTabs} />
        </Drawer.Navigator>
    )
}
