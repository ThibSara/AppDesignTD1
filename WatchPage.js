import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WatchPage({title,price,imageSource}) {
const navigation = useNavigation();
const handleArrowPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
      <TouchableOpacity onPress={handleArrowPress}>
        <Image source={require('./assets/images/Arrow.png')} style={styles.arrowImage} />
        </TouchableOpacity>
        <Image source={imageSource} style={styles.watchImage} />
      </View>
        <View style={styles.color_container}>
      <View style={styles.description_container}>
        <View style={styles.headline_container}>
          <View style={styles.title_container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.subtitleStyle}>( With solo loop )</Text>
          </View>
          <Text style={styles.priceStyle}>{price}</Text>
        </View>
        <Text style= {styles.description}>The aluminium case is lightweight and made from 100 percent recycled aerospace grade alloy.</Text>
        <View style={styles.button_container}>
        <Text style={{color: '#fff'}}>Add to cart</Text>
    </View>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  color_container:{
    paddingTop:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
},
  image_container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-center',
    paddingTop: 70,
  },
  
  arrowImage: {
    width: 20, 
    height: 20, 
  },
  watchImage: {
    width : 311,
    height : 311,
  },
  headline_container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: 70,

  },
  title_container: {
    gap: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleStyle: {
    fontSize: 24,
    color: '#000000',
  },
  subtitleStyle: {
    fontSize: 12,
    color: '#9095A6',
  },
  priceStyle: {
    fontSize: 24,
    color: '#5b40ff',
  },
  description: {
    color : '#9095A6',
    fontSize : 14, 
  },
  description_container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 23,
    paddingHorizontal: 20,
  },
  button_container:{
    marginTop: 140,
    borderRadius: 10,
    backgroundColor: '#5b40ff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    height:71,
    marginBottom: 50,
  },
  cart_style:{
    fontSize:24,  },
});
