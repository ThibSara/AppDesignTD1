import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './HomePage';
import WatchPage from './WatchPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cardData } from './data';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <HomePage {...props} title="homepage" cardData={cardData} navigation={props.navigation} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="WatchPage"
              options={{ headerShown: false }}>
            {(props) => (
            <WatchPage {...props} title={props.route.params.title} price ={props.route.params.price} imageSource={props.route.params.imageSource} />
      )}
</Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

