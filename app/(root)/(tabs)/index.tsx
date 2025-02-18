import { Text, View, Image} from "react-native";
import { Link } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageURISource } from "react-native";
import { useGlobalContext } from "@/lib/global-provider";
import { SearchBar } from "react-native-screens";
import Search  from "@/components/Search"
export default function Index() {

  const getTimeOfDay = () => {
    const hour = new Date().getHours(); // Get the current hour (0-23)
    if (hour >= 6 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const greeting = getTimeOfDay();
  const {user} = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source = {{uri: user?.avatar}} className="size-12 rounded-full"></Image>
            <View className="flex flex-col ml-2 items-start justify-center">
              <Text className="text-xs font-rubik text-black-300">{greeting}</Text>
              <Text className="text-base font-bold text-black-300">{user?.name}</Text>
            </View>
          </View>
        </View>
      </View>
      <Search/>
    </SafeAreaView>
  );
}
