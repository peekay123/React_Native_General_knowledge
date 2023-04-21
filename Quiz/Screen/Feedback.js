import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Feedback = () => {
  return (
    <View style={{padding:20}}>
       <View style={styles.Feedback}>
          <TextInput placeholder='write your feed back here' multiline />
       </View>
       <TouchableOpacity style={styles.button}>
        <Text style={{fontWeight:'bold',color:'#eee'}}>SUBMIT</Text>
       </TouchableOpacity>
    </View>
  )
}

export default Feedback

const styles = StyleSheet.create({
    Feedback:{
        width:'100%',
        height:200,
        borderRadius:5,
        marginVertical:10,
        elevation:4,
        shadowColor:'#000000',
        shadowOpacity:100,
        backgroundColor:'#eee',
        padding:20,
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        height:40,
        width:'90%',
        borderRadius:30,
        backgroundColor:'#e65100',
        alignSelf:'center',
        marginTop:10,
    }
})