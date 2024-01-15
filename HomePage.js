import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font';
import { useCallback } from 'react';
import Card from './card';


export default function HomePage() {

    const [fontsLoaded] = useFonts({
        regular: require('./assets/fonts/regular.ttf'),
        r_bold : require('./assets/fonts/bold.ttf'),
        r_semibold: require('./assets/fonts/semiBold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    
    const title = 'Find your suitable \n watch now';

    return (
      <View style={styles.title_container}>
        <Text style={styles.textStyle}>{title}</Text>
        <Text style = {styles.labelStyle}>Smart Watch</Text>
        <Card/>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    title_container: {
      flex: 1,
      backgroundColor: '#fbfbff',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    textStyle: {
        fontFamily: 'r_bold',
        fontSize:24,
    },
    labelStyle : {
        color : '#5b40ff',
        fontFamily:'r_semibold',
    }
  });
