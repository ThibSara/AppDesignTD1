import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
    return (
      <View style={styles.container}>
        <Text>Find your Suitable</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  