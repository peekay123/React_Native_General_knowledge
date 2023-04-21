import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, Image, Text, Dimensions } from 'react-native';
import db from "../firebase";
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import HistoryWord2 from '../hiscompo/HistoryWord2';
import HistoryWord from '../hiscompo/HistoryWord';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width,height}= Dimensions.get('window');
const HistoryDay = ({navigation, route}) => {
    const [counter, setCount] = useState([]);
    const [words, setWords] = useState([{word: "loading", id: "initial"}]);
    const x = route.params.x;
    const y = route.params.y;

    useEffect(() => {
          getTodosFromUserDevice();
        },[]);

    const getTodosFromUserDevice = async () => {
          try {
            const count = await AsyncStorage.getItem('scoreCount');
            if (count != null) {
              setCount(JSON.parse(count));
            }
          } catch (error) {
            console.log(error);
          }
        };
    
    useEffect(() => {
        const collectionRef = collection(db, "History");
        const q = query(collectionRef, orderBy("createdAt", "asc"));
        onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setWords(data);
        });
      }, []);
      
  return (   
      <View style={{paddingHorizontal:20,paddingVertical:10}}>
        <ScrollView>
          <View>
            <Text style={{fontSize: 24, fontWeight: '500', textAlign:'center'}}>Choose Level</Text>
          </View>
          <View style={styles.bodyCon}>
            {words.slice(0,counter+1).slice(x,y).map(({ id, day  })=>(
              <HistoryWord key={id} id={id} day={day} navigation={navigation} />
                ))}
            {words.slice(counter+1,365).slice(x,y).map(({ id, day  })=>(
              <HistoryWord2 key={id} id={id} day={day}  />
            ))}
          </View>
          <Image source={require('../assets/Images/general.png')} style={{width:300,height:300,alignSelf:'center'}} resizeMode='contain'/> 
        </ScrollView>
     </View>
  )
}

export default HistoryDay;
const styles = StyleSheet.create({
    container: {
      flex:1,
      height:'100%',
      width:'100%'
    },
    Photo:{
      height:height<380 ? 700:750,
      width:'100%',
    },
    bodyCon:{
      flex:1,
      backgroundColor:'#f5f5f2',
      paddingTop:10,  
      borderTopLeftRadius:40,
      borderTopRightRadius:40
    }
  });