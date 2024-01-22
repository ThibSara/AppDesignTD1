import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font';
import { useCallback } from 'react';
import Card from './card';
import { cardData } from './data';
import WatchPage from './WatchPage';

export default function HomePage({navigation}) {
  const handleCardPress = (title,price,imageSource) => {
    navigation.navigate('WatchPage', { title, price, imageSource });
  };
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
      <View style={styles.home}>
        <Text style={styles.textStyle}>{title}</Text>
        <Text style = {styles.labelStyle}>Smart Watch</Text>  
        <View style = {styles.card_container}>   
      {cardData.map((data, index) => (
        <TouchableOpacity onPress={() => handleCardPress(data.title,data.price,data.imageSource)}>
        <Card
          key={index}
          title={data.title}
          serialNumber={data.serialNumber}
          price={data.price}
          imageSource={data.imageSource}
        />
        </TouchableOpacity>
      ))}
      </View>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    home: {
      flex: 1,
      display:'flex',
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginHorizontal:20,
      marginTop:20,
      gap:20,
    },
    textStyle: {
        fontFamily: 'r_bold',
        fontSize:36,
        color:'#1b153d',
    },
    labelStyle : {
        color : '#5b40ff',
        fontFamily:'r_semibold',
        fontSize:16,
        lineHeight:24,
    },
    card_container:{
        display:'flex',
        flexDirection:'row',
        gap:15,
        flexWrap:'wrap',
        justifyContent:'space-between',

    }
  });
