import {  Stack } from "expo-router";
import { useFonts } from "expo-font";
import './global.css'
import { useEffect } from "react";
import GlobalProvider from "@/lib/global-provider";
import * as SplashScreen from "expo-splash-screen";
export default function RootLayout() {
  
  const [fontsLoaded] = useFonts({
    "Rubik-ExtraBold" : require('../assets/fonts/Rubik-ExtraBold.ttf'),
    "Rubik-Light" : require('../assets/fonts/Rubik-Light.ttf'),
    "Rubik-Medium" : require('../assets/fonts/Rubik-Medium.ttf'),
    "Rubik-Regular" : require('../assets/fonts/Rubik-Regular.ttf'),
    "Rubik-Semi" : require('../assets/fonts/Rubik-Semi.ttf'),
  });
  //if the fonts have loaded we can move out of the splash screen
  /*useEffect(() =>{
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;*/

  //screenOptions hides the tabs thing which was being shown above on the top of the app
  return( 

    <GlobalProvider>
      <Stack screenOptions={{headerShown : false}}/>
    </GlobalProvider>
    )
}
// ios 126956906790-6udke76295uhmtbhvha46j88vbr1p8mc.apps.googleusercontent.com