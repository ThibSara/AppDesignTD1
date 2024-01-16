import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';


export default function Card({ title, serialNumber, price, imageSource}) {
    return (
        <View style={styles.container}>
            <View style = {styles.frame_image}>
            <Image source={imageSource} style={styles.image} />
            </View>
            <View style = {styles.frame_text}>
            <View style = {styles.frame_title}>
                <Text style= {styles.text_name}>{title}</Text>
                <Text style= {styles.text_serie}>{serialNumber}</Text>
            </View>
                <Text style= {styles.text_Price}>{price}</Text>
            </View>
        </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      height:213,
      width: 157,
      borderRadius:14,
      padding:8,
      alignItems: 'flex-start',
      flexDirection :'column',
      shadowColor: '#000', 
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    frame_image : {
        backgroundColor:'#fbfbff',
        justifyContent:'center',
        borderRadius:14,
        height:101,
        width:141,
        marginBottom:16,
        marginTop:8,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 14,
      },
    frame_text:{
        alignItems:'flex-start',
        display:'flex',
        flexDirection:'column',
        gap:10,
    },
    frame_title:{
        alignItems:'flex-start',
        display:'flex',
        flexDirection:"column",
        gap:8,
        justifyContent:'center',

    },

    text_name:{
        color: '#1b153d',
        fontSize:16,
    },
    text_serie:{
        color:'#9095a6',
        fontSize:12,
    },
    text_Price:{
        paddingBottom:8,
        color : "#5b40ff",
        fontSize:16
    },
  });
  