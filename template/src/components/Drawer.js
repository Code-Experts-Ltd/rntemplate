import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import Style from '../style/Style'
import Spacing from './Spacing'
import { useSelector } from 'react-redux'

const MyDrawer = (props) => {
    const navigation = useNavigation()

    const user = useSelector((state) => state.user.user)

    return (
        <DrawerContentScrollView {...props}>
            <View style={{ flex: 1, paddingTop: 20, marginLeft: 20 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.dispatch(DrawerActions.closeDrawer())
                        navigation.navigate('Profile')
                    }}
                >
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Image
                            source={{
                                uri: 'https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg',
                            }}
                            style={{ width: 30, height: 30, borderRadius: 25 }}
                        />
                        <Spacing val={5} type='h' />
                        <Text style={[Style.fontBold, Style.label]}>
                            {user.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginTop: 20 }}>
                <DrawerItem
                    label='Home'
                    onPress={() => navigation.navigate('HomeScreen')}
                />
                <DrawerItem
                    label='Settings'
                    onPress={() => navigation.navigate('SettingScreen')}
                />
            </ScrollView>
        </DrawerContentScrollView>
    )
}

export default MyDrawer
