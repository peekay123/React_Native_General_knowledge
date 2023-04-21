import { StyleSheet, Text, View,Pressable,Image,ImageBackground,Share } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo,FontAwesome,AntDesign } from '@expo/vector-icons'; 

const DrawerContent = ({navigation}) => {
    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'Share our QUIZ app with friends and test your knowledge.',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={{uri:'https://www.clipartmax.com/png/middle/70-706476_umbrella-clipart-eight-tibetan-eight-lucky-signs.png'}} 
        style={{width:'100%',height:"100%"}} imageStyle={{opacity:0.05}} resizeMode='repeat'>
      <View style={{paddingHorizontal:15,marginTop:10,}}>
        <View>
           <Image source={require('../assets/Images/logo.png')} resizeMode='contain' style={{ width:'100%',height:200}}/>
        </View>
        <Pressable onPress={()=>{navigation.navigate('Home')}} style={styles.Home}>
            <View style={{marginLeft:15,}}>
            <Entypo name="home" size={24} color="black" />
            </View>
            <View style={{marginLeft:10,}}>
            <Text>Home</Text>
            </View>
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('Feedback')}} style={styles.Home}>
            <View style={{marginLeft:15,}}>
            <Entypo name="message" size={24} color="black" />
            </View>
            <View style={{marginLeft:10,}}>
            <Text>Feedback</Text>
            </View>
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('Aboutus')}} style={styles.Home}>
            <View style={{marginLeft:15,}}>
            <AntDesign name="exclamationcircle" size={24} color="black" />
            </View>
            <View style={{marginLeft:10,}}>
            <Text>About Us</Text>
            </View>
        </Pressable>
        <Pressable onPress={onShare} style={styles.Home}>
            <View style={{marginLeft:15,}}>
            <FontAwesome name="share" size={24} color="black" />
            </View>
            <View style={{marginLeft:10,}}>
            <Text>Share It</Text>
            </View>
        </Pressable>
        
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
    Home:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'100%',
        height:60,
        borderRadius:5,
        marginVertical:10,
        elevation:4,
        shadowColor:'#000000',
        shadowOpacity:100,
        backgroundColor:'#eee'
    }
})