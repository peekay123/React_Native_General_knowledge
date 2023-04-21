import { StyleSheet, Text, View ,Image, Pressable,ImageBackground} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


const HomeScreen = ({navigation}) => {
  return (
  <LinearGradient colors={["orange","#6a1b9a"]} style={{flex:1,}}>
    <ImageBackground source={require('../assets/Images/star.png')} resizeMode='repeat' style={{width:'100%',height:'100%',flex:1}} imageStyle={{opacity:0.15}}>
    <View>
      <View style={{width:'100%',height:200}}>
      <Image source={{uri:"https://www.gobhutantours.com/wp-content/uploads/2019/06/Kings-of-Bhutan.jpg"}}
      resizeMode='cover'
        style={{height:"100%",width:"100%",borderBottomLeftRadius:20,borderBottomRightRadius:20}} />
      </View>
        <View style={{paddingTop:15}}>
          <Text style={{textAlign:"center" ,fontSize:15, color:"blue", fontWeight:"bold",fontFamily:'monospace'}}> Welcome To Test The Knowledge</Text>
        </View>
        <View style={{padding:10}}>
        <Text 
        style={{color:"white",fontSize:15, fontWeight:"500", textAlign:"center",fontFamily:'monospace',lineHeight:25}}>
       ང་བཅས་ག་ར་གི་ འབྲུག་རྒྱལ་ཁབ་ཀྱི་ ལམ་སྲོལ་དང་ རྒྱལ་རབས་ དེ་ལས་ དམངས་གཙོའི་གཞུང་གི་ སྐོར་ལས་ མཁྱེན་ཚུགས་ནི་གི་དོན་ལུ་ དྲི་བ་དྲི་ལེན་གྱི་ འགྲན་བསྡུར་ནང་ བཅའ་མར་གཏོགས་གནང་ཟེར་ཞུ་ནི་ཨིན་ལགས།
        </Text>
        </View>
        {/* <View style={{padding:10}}>
        <Text 
        style={{color:"white",fontSize:15, fontWeight:"500", textAlign:"center",fontFamily:'monospace',lineHeight:25}}>
          If you are a proud Bhutanese then why not, Check your General Knowledge about BHUTAN!
        </Text>
        </View> */}
     
        <View style={{justifyContent:'flex-end',alignItems:'center'}}>
        <Image source={require('../assets/Images/quizzz.png')} style={{width:'100%',height:150}}/>
        </View>
        <View  style={{justifyContent:'center',alignItems:'center',padding:20}}>
          <Pressable android_ripple={{color:'red'}} style={{flexDirection:'row',alignItems:'center',justifyContent:'center', width:'100%',height:60,backgroundColor:'#FF8C00',borderRadius:10}}
          onPress={()=>{navigation.navigate('QuizCatgory')}}>
            <View>
              <Image source={require('../assets/Images/quiz.png')} style={{width:50,height:50,}}/>
            </View>
            <Text style={{fontWeight:'bold',fontSize:17,color:'#eee',marginLeft:10}}>TAKE QUIZ</Text>
            <Image source={require('../assets/Images/arrow.png')} style={{width:20,height:20,marginLeft:20,tintColor:'#eee'}}/>
          </Pressable>
        </View>
    </View>
    </ImageBackground>
  </LinearGradient>


  )
}

export default HomeScreen

const styles = StyleSheet.create({})