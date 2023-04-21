import { StyleSheet, Text, View,TouchableOpacity,Image,ImageBackground} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const QuizCatagory = ({navigation}) => {
  return (
    <LinearGradient colors={["#ff9100","#6a1b9a"]} style={{flex:1,}}>
      <View style={{justifyContent:'center',alignItems:'center', marginTop:20}}>
       <Image source={require('../assets/Images/quizcategory.png')} style={{width:150,height:150}} resizeMode='contain'/>
      </View>
    
    <View style={{flex:1,}}>
        <View style={{padding:10,}}>
          <View style={styles.container}>
       <TouchableOpacity onPress={()=>{navigation.navigate('CulDay', {x:0,y:30})}}
       style={{width:'45%',height:130,backgroundColor:'#e65100',borderRadius:15,marginRight:10}}>
        <ImageBackground source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/800px-Flag_of_Bhutan.svg.png"}} 
        style={{width:'100%',height:'100%'}} imageStyle={{opacity:0.12,borderRadius:15}} resizeMode='cover'>
         <View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3090/3090731.png'}} style={{width:50,height:50}}/>
        <Text style={{fontSize:20,color:'#eee',fontWeight:'bold'}}>ལམ་སྲོལ།</Text>
        </View>
        </ImageBackground>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{navigation.navigate('DemoDay', {x:0, y:30})}}
       style={{width:'45%',height:130,backgroundColor:'#e65100',borderRadius:15,}}>
        <ImageBackground source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/800px-Flag_of_Bhutan.svg.png"}} 
        style={{width:'100%',height:'100%'}} imageStyle={{opacity:0.12,borderRadius:15}} resizeMode='cover'>
         <View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
        <Image source={require('../assets/Images/Democracy.png')}   style={{width:50,height:50}}/>
        <Text style={{fontSize:20,color:'#eee',fontWeight:'bold'}}>དམངས་གཙོ།</Text>
        </View>
        </ImageBackground>
       </TouchableOpacity>
       <TouchableOpacity  onPress={()=>{navigation.navigate('HisDay', {x:0, y:30})}}
       style={{width:'45%',height:130,backgroundColor:'#e65100',borderRadius:15,marginRight:10,marginTop:20}}>
        <ImageBackground source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/800px-Flag_of_Bhutan.svg.png"}} 
        style={{width:'100%',height:'100%'}} imageStyle={{opacity:0.12,borderRadius:15}} resizeMode='cover'>
         <View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
        <Image source={require('../assets/Images/history.png')}   style={{width:50,height:50}}/>
        <Text style={{fontSize:20,color:'#eee',fontWeight:'bold'}}>རྒྱལ་རབས།</Text>
        </View>
        </ImageBackground>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{navigation.navigate('Day', {x:0,y:30})}}
       style={{width:'45%',height:130,backgroundColor:'#e65100',borderRadius:15,}}>
        <ImageBackground source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/800px-Flag_of_Bhutan.svg.png"}} 
        style={{width:'100%',height:'100%'}} imageStyle={{opacity:0.12,borderRadius:15}} resizeMode='cover'>
         <View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
        <Image source={require('../assets/Images/g.png')}  style={{width:50,height:50}}/>
        <Text style={{fontSize:20,color:'#eee',fontWeight:'bold'}}>སྤྱིར་བཏང་།</Text>
        </View>
        </ImageBackground>
       </TouchableOpacity>
       </View>
       
       </View>
 
    </View>
    </LinearGradient>
  )
}

export default QuizCatagory

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',


  }
})