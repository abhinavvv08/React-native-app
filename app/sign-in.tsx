import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import icons from "../constants/icons";
import images from "../constants/images";
import { useFonts } from 'expo-font';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';
const signIn = () => {

    const { refetch, loading, isLogged } = useGlobalContext();

    if(!loading && isLogged) return <Redirect href = "/"/>;
    const handleLogin = async() => {
        const result = await login();

        if (result) {
            refetch();
        }
        else {
            Alert.alert("Error", "Failed to login")
        }
    };
  return (
    //SafeAreaView is used to utilize only the dimensions which are visible on the app
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle = {{ height : 'auto' }}>
        <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'flex-start' }}>
            <Text style={{
              fontSize: 14,
              textAlign: 'center',
              textTransform: 'uppercase',
              fontWeight: '500',
              marginTop: 20,
              color: '#191D31'}}>
                WELCOME TO EMAIL-APP
            </Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2, marginBottom:250, marginTop:250 }}>
                <Text style={{
              fontSize: 24,
              textAlign: 'center',
              fontWeight: '600',
              color: 'black-200',
              lineHeight: 32}}>
                Let's Make Sure You Never {"\n"}
                <Text className='text-primary-300'>Miss Something Important</Text>
                </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 40 }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#555',
                    textAlign: 'center',
                    marginBottom: 10,
            }}>
                Login to Email-app with Google
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={handleLogin} style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 2 },
            borderRadius: 30,
            width: '90%',
            paddingVertical: 12,
            marginLeft:18
          }}>
                <Image source={icons.google} className='w-7 h-7 marginRight-10' resizeMode='contain'/>
                <Text style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#000',
              marginLeft:10
            }}>Continue with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn