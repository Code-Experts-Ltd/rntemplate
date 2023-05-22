import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    Animated,
} from 'react-native';
import Spacing from '../../components/Spacing';
import TopBar from '../../components/TopBar';
import Style from '../../style/Style';
import EditIcon from '../../assets/edit-icon.svg';
import SecondaryButton from '../../components/SecondaryButton';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import Color from '../../style/Color';
import InputField from '../../components/InputField';
import { setUser } from '../../app/userSlice';

export default Profile = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const [fullName, setFullName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [mobileNumber, setMobileNumber] = useState(user.mobile);

    const [isLoading, setIsLoading] = useState(false);
    const [error, SetError] = useState();

    const pickImage = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 1,
        });

        console.log('Result', result);
        const { assets } = result;
        if (assets && assets.length > 0) {
            const { uri } = assets[0];
        }
    };

    return (
        <SafeAreaView style={[Style.container]}>
            <TopBar />
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={Style.hPadding}>
                        <Spacing val={20} />
                        <Text
                            style={[
                                Style.fontBold,
                                Style.colorPrimary,
                                Style.heading,
                            ]}>
                            Profile
                        </Text>
                        <Spacing val={20} />

                        <View
                            style={[
                                {
                                    margin: 2,
                                    width: 70,
                                    height: 70,
                                    borderRadius: 50,
                                },
                            ]}>
                            <Image
                                style={[
                                    Style.profileImage,
                                    {
                                        borderWidth: 2,
                                        borderColor: Color.white,
                                    },
                                ]}
                                source={{
                                    uri: 'https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg',
                                }}
                            />
                            <View
                                style={{
                                    justifyContent: 'center',
                                    zIndex: 999,
                                    alignItems: 'flex-end',
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: -12,
                                    position: 'absolute',
                                }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        pickImage();
                                    }}>
                                    <View
                                        style={{
                                            borderRadius: 15,
                                            padding: 5,
                                            backgroundColor: Color.white,
                                            borderWidth: 2,
                                            borderColor: Color.background,
                                        }}>
                                        <EditIcon />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Spacing val={30} />
                        <InputField
                            label={'Full name'}
                            maxLength={80}
                            placeholder={'Enter full name...'}
                            keyboard={'default'}
                            onChangeText={(text) => {
                                setFullName(text);
                            }}
                            value={fullName}
                        />
                        <Spacing val={15} />
                        <InputField
                            editable={false}
                            label={'Email address'}
                            placeholder={'Enter email address...'}
                            keyboard={'email-address'}
                            disable={true}
                            onChangeText={(text) => {
                                setEmail(text);
                            }}
                            value={email}
                        />
                        <Spacing val={15} />
                        <InputField
                            editable={false}
                            label={'Mobile number'}
                            placeholder={'+1-000-000-0000'}
                            keyboard={'phone-pad'}
                            disable={true}
                            onChangeText={(text) => {
                                setMobileNumber(text);
                            }}
                            value={mobileNumber}
                        />
                        <Spacing val={15} />

                        <SecondaryButton
                            onPress={() => {
                                navigation.navigate('ResetPassword');
                            }}>
                            Reset Password
                        </SecondaryButton>
                        <Spacing val={15} />

                        <PrimaryButton
                            disabled
                            onPress={() => {
                                const user = {
                                    name: fullName,
                                    email,
                                    mobile: mobileNumber,
                                };
                                dispatch(setUser(user));
                            }}>
                            Save
                        </PrimaryButton>
                        <Spacing val={20} />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            {isLoading && (
                <View>
                    <ActivityIndicator size={'large'} />
                </View>
            )}
        </SafeAreaView>
    );
};
