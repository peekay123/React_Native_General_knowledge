import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const DemocracyWord2 = ({day,id}) => {  
  return (
    <TouchableOpacity style={styles.Touch} key={id} > 
       <View style={{width:100}}><Text style={styles.wordText}>Level {day}</Text></View><View style={{marginLeft:30,}}></View>
    </TouchableOpacity>
  )
}

export default DemocracyWord2;
const styles = StyleSheet.create({
    wordText: {
      fontWeight: 'bold',
      fontSize: 18,
      color:'black',
    },
    Touch:{
      marginLeft:25,
      marginRight:25,
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
      flexDirection:'row',
      paddingLeft:115,
    },
  });