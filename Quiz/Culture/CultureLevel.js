import React from 'react'
import { View,ScrollView, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width,height}= Dimensions.get('window');
const CultureLevel = () => {

  return (
    <View style={{flex:1}}>
      <View style={StyleSheet.container} >

      </View>
    </View>
  )
}

export default CultureLevel;
const styles=StyleSheet.create({
    container:{
        flex:1,
        height:350,
        width:width,
      },
    BgImage:{
        height:height<400 ? 350:350,
        width:'100%',
      },
    second:{
        marginTop:height<400 ? 40:-280,
        width:width<380 ? 215:215,
        paddingLeft:20
      },
      head:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
      },
      subHead:{
        fontSize:15,
        fontWeight:'bold',
        color:'grey',
      },
      bodyCon:{
        flex:1,
        backgroundColor:'#e6e6e6',
        marginTop:height<400 ? 20: 50,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        paddingTop:10
      },
      wordText: {
        fontWeight: 'bold',
        fontSize: 18,
        color:'black',
      },
      Touch:{
       marginLeft:20,
        marginRight:20,
        marginBottom:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:60,
        elevation:10,
        shadowColor:'grey',
        shadowOpacity:0.3,
        shadowOffset:{width:9,height:8},
      },
      Touch1:{
        marginLeft:20,
        marginTop:10,
        marginRight:20,
        marginBottom:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:60,
        elevation:10,
        shadowColor:'grey',
        shadowOpacity:0.3,
        shadowOffset:{width:9,height:8}
       },
}
)