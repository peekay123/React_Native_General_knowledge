import { StyleSheet, Text, View,  Dimensions, Image } from 'react-native'
import React from 'react'
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <LinearGradient  style={styles.container}colors={["orange","#6a1b9a"]}>
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image style={styles.image} source={require('../assets/appicon.jpg')}/>
      <Text style={{fontSize:10,fontWeight:'bold'}}></Text>
    </View>
    </LinearGradient>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  image:{
    height: Platform.OS === 'ios' ? 200 : 100,
    width: Platform.OS === 'ios' ? 250 : 100,
    borderRadius: Platform.OS === 'ios' ? 7 : 4,
  },
  container:{
    flex:1
  }
})