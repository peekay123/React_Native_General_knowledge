import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView, } from 'react-native';
import Detail from './screens/Detail';
import Activity from './screens/Activity';
import Result from './screens/Result';
import Level from './screens/Level';
import Day from './screens/Day';
import CultureActivity from './Culture/CultureActivity';
import CultureDay from './Culture/CultureDay';
import CultureDetail from './Culture/CultureDetail';
import CultureLevel from './Culture/CultureLevel';
import CultureResult from './Culture/CultureResult';
import DemocracyActivity from './Democracy/DemocracyActivity';
import DemocracyDay from './Democracy/DemocracyDay';
import DemocracyDetail from './Democracy/DemocracyDetail';
import DemocracyLevel from './Democracy/DemocracyLevel';
import DemocracyResult from './Democracy/DemocracyResult';
import HistoryActivity from './History/HistoryActivity';
import HistoryDay from './History/HistoryDay';
import HistoryDetail from './History/HistoryDetail';
import HistoryLevel from './History/HistoryLevel';
import HistoryResult from './History/HistoryResult';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Home,DrawerContent,QuizCatagory,
  GeneralLevel,Feedback,Aboutus} from './Screen/Index';
  const Drawer = createDrawerNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();
  useFonts({
    'Abril': require('./assets/Fonts/AbrilFatface-Regular.ttf'),
    'Anton': require('./assets/Fonts/Anton-Regular.ttf'),
    'Alfa': require('./assets/Fonts/AlfaSlabOne-Regular.ttf'),
    'Blaka': require('./assets/Fonts/Blaka-Regular.ttf'),
    'DMSeri': require('./assets/Fonts/DMSerifDisplay-Regular.ttf'),
    'Ultra': require('./assets/Fonts/Ultra-Regular.ttf'),
    'Nunito-Regular': require('./assets/Fonts/Nunito-Regular.ttf'),
    'Roboto-Regular': require('./assets/Fonts/Roboto-Regular.ttf'),
  })

  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer >
          <Stack.Navigator>
          <Stack.Screen name='HomeScreen' component={DrawerNavigation} options={{headerShown:false,}}/>
              <Stack.Screen name="Level" component={Level} options={{headerShown:false}}/>
              <Stack.Screen name="Day" component={Day} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'General',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/>
              <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}} />
              <Stack.Screen name="Activity" component={Activity} options={{headerShown:false}}/>
              <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>
              <Stack.Screen name="CulLevel" component={CultureLevel} options={{headerShown:false}}/>
              <Stack.Screen name="CulDay" component={CultureDay} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'Culture',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/>
              <Stack.Screen name="CulDetail" component={CultureDetail} options={{headerShown:false}} />
              <Stack.Screen name="CulActivity" component={CultureActivity} options={{headerShown:false}}/>
              <Stack.Screen name="CulResult" component={CultureResult} options={{headerShown:false}}/> 
              <Stack.Screen name="DemoDay" component={DemocracyDay} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'Democracy',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/>
              <Stack.Screen name="DemoDetail" component={DemocracyDetail} options={{headerShown:false}} />
              <Stack.Screen name="DemoActivity" component={DemocracyActivity} options={{headerShown:false}}/>
              <Stack.Screen name="DemoResult" component={DemocracyResult} options={{headerShown:false}}/>
              <Stack.Screen name="DemoLevel" component={DemocracyLevel} options={{headerShown:false}}/> 
              <Stack.Screen name="HisDay" component={HistoryDay} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'History',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/>
              <Stack.Screen name="HisDetail" component={HistoryDetail} options={{headerShown:false}} />
              <Stack.Screen name="HisActivity" component={HistoryActivity} options={{headerShown:false}}/>
              <Stack.Screen name="HisResult" component={HistoryResult} options={{headerShown:false}}/>
              <Stack.Screen name="HisLevel" component={HistoryLevel} options={{headerShown:false}}/>    
        <Stack.Screen name='QuizCatgory' component={QuizCatagory} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'Quiz Category',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/>
      {/* <Stack.Screen name='CultureLevel' component={CultureLevel} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'Culture',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/> */}
      {/* <Stack.Screen name='DemocracyLevel' component={DemocracyLevel} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'Democracy',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/> */}

{/* <Stack.Screen name='HistoryLevel' component={HistoryLevel} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'History',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/> */}

<Stack.Screen name='GeneralLevel' component={GeneralLevel} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'General',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/>

<Stack.Screen name='Feedback' component={Feedback} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'Feed back',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/>

<Stack.Screen name='Aboutus' component={Aboutus} options={{
          headerTintColor:'#eee',
          headerStyle:{backgroundColor:'orange'},
          headerTitleAlign:'center',
          headerTitle:'About us',
          headerTitleStyle:{color:'#eee',
          fontFamily:'monospace',
          fontSize:17,fontWeight:'bold'}
        }}/>
          </Stack.Navigator>
          <StatusBar mode="light" />
      </NavigationContainer>
    </SafeAreaView>
  );
}
function DrawerNavigation(){
  return(
    <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:'center',
      headerTitle:'སྤྱིར་བཏང་ཡོན་ཏན།',
      headerTintColor: '#000000',
      headerStyle: { backgroundColor: 'orange'},
      headerTitleStyle:{color:'#000000',
      fontFamily:'monospace',
      fontSize:20,fontWeight:'bold'}
    }}
     drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={Home} />
   </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
