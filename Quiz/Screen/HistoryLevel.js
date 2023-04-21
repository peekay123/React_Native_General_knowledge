import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React from 'react'


const HistoryLevel = () => {
  return (
    <View style={{paddingHorizontal:20,paddingVertical:10}}>
       <TouchableOpacity style={styles.level}>
        <Text style={{fontWeight:'bold',color:'#000',fontSize:17}}>Level 1</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.level}>
        <Text style={{fontWeight:'bold',color:'#000',fontSize:17}}>Level 2</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.level}>
        <Text style={{fontWeight:'bold',color:'#000',fontSize:17}}>Level 3</Text>
       </TouchableOpacity>
       <View style={{justifyContent:'center',alignItems:'center'}}>
       <Image source={require('../assets/Images/king.png')} style={{width:350,height:350,alignSelf:'center'}} resizeMode='contain'/>
       </View>
    </View>

  )
}

export default HistoryLevel

const styles = StyleSheet.create({
    level:{
        width:"100%", 
        height:65,
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        elevation:4,
        shadowColor:'#000000',
        shadowOpacity:100,
        marginVertical:10,
    

    }
})