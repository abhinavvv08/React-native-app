import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import icons from '@/constants/icons';
import { useFonts } from 'expo-font';
import images from '@/constants/images';
import { logout } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { ImageSourcePropType } from 'react-native';
import { useRouteInfo } from 'expo-router/build/hooks';
const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 32,
        paddingHorizontal: 7,
    },
});

interface SettingsItemProp {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    textStyle?: string;
    showArrow?: boolean;
  }
  const SettingsItem = ({
    icon,
    title,
    onPress,
    textStyle,
    showArrow = true,
  }: SettingsItemProp) => (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center justify-between py-3"
    >
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
          {title}
        </Text>
      </View>
  
      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
  
const profile = () => {
    
    const { user, refetch } = useGlobalContext();

    const handleLogout = async () => {
        const result = await logout();
    if (result) {
      Alert.alert("Success", "Logged out successfully");
      refetch();
    } else {
      Alert.alert("Error", "Failed to logout");
    }
    };

  return (
    <SafeAreaView className='h-full bg-white'>
        <ScrollView showsVerticalScrollIndicator = {false} 
        contentContainerStyle = {styles.contentContainer}>
            <View className='flex flex-row items-center justify-between mt-6'>
                <Text className='text-xl font-bold'>Profile</Text>
                <Image source = {icons.bell} className="size-6"></Image>
            </View>
            <View className='flex-row justify-center flex mt-5'>
                <View className='flex flex-col items-center relative mt-5'>
                    <Image source={{uri: user?.avatar}} className='size-44 relative rounded-full'></Image>
                    <TouchableOpacity className='absolute bottom-7 right-2'>
                        <Image source={icons.edit} className='size-9'/>
                    </TouchableOpacity>
                    <Text className='font-bold text-2xl mt-2'>{user?.name}</Text>
                </View>
            </View>

        <View className="flex flex-col border-t mt-5 pt-5 border-primary-200">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default profile