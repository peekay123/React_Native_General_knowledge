import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Aboutus = () => {
  return (
    <View style={{paddingHorizontal:20,marginTop:10}}>
        <View style={styles.Aboutus}>
          <Image source={require('../assets/Images/sw.png')} style={{width:60,height:60,}}/>
          <Text style={{textAlign:'center',
          fontFamily:'monospace',
          marginTop:10,lineHeight:20
          }}>{'\t'}{'\t'}Module Tutor{'\n'}
          {'\t'}{'\t'}{'\t'}  Miss Sonam Wangmo{'\n'}
        </Text>
       </View>
       <View style={styles.Aboutus}>
          <Image source={require('../assets/Images/st.png')} style={{width:80,height:80,}}/>
          <Text style={{textAlign:'center',
          fontFamily:'monospace',
          marginTop:10,lineHeight:20
          }}>{'\t'}{'\t'}Front-End Developer{'\n'}
          {'\t'}{'\t'}Mr.Sonam Tshering{'\n'}
        </Text>
       </View>
       <View style={styles.Aboutus}>
          <Image source={require('../assets/Images/ata.png')} style={{width:80,height:80}}/>
          <Text style={{textAlign:'center',
          fontFamily:'monospace',
          marginTop:10,lineHeight:20
          }}>{'\t'}{'\t'}Front-End Developer{'\n'}
          {'\t'}{'\t'}   Mr.Kuenzang Tshering{'\n'}
        </Text>
       </View>
       <View style={styles.Aboutus}>
          <Image source={require('../assets/Images/boma.png')} style={{width:80,height:80,}}/>
          <Text style={{textAlign:'center',
          fontFamily:'monospace',
          marginTop:10,lineHeight:20,lineHeight:20
          }}>{'\t'}{'\t'}Back-End Developer{'\n'}
          {'\t'}{'\t'} {'\t'}Miss Boma Devi Rai{'\n'}
        </Text>
       </View>
  
       <View style={styles.Aboutus}>
          <Image source={require('../assets/Images/pk.png')} style={{width:85,height:85,}}/>
          <Text style={{textAlign:'center',
          fontFamily:'monospace',
          marginTop:10,lineHeight:20
          }}>{'\t'}{'\t'}Back-End Developer{'\n'}
          {'\t'}{'\t'} Mr.Purna Kumar Limbu{'\n'}
        </Text>
       </View>
       
       <Text style={{textAlign:'center',fontWeight:'bold',marginTop:40,}}>All copyrights reserved | © 2022 GCIT</Text>
    </View>
  )
}

export default Aboutus

const styles = StyleSheet.create({
    Aboutus:{
        width:'100%',
        height:100,
        borderRadius:5,
        marginVertical:5,
        elevation:4,
        shadowColor:'#000000',
        shadowOpacity:100,
        backgroundColor:'#eee',
        padding:20,
        flexDirection:'row',
        paddingLeft:10,
        alignItems:'center'


    }
})