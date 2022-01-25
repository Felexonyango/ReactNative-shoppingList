import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer";



import Home from "./Home";
import Task from "./Task";

const Drawer=createDrawerNavigator()

const CustomDrawer=(props)=>{


    return (
        <View style={styles.Custom}>
    <DrawerContentScrollView {...props}>
        
        <View style={styles.container}>
        <View>
            <Text>Felex Onyango</Text>
            <Text>felexonyango19@gmail.com</Text>
        </View>
        <Image source={require('../assets/1693.jpg')}style={{width: 60, height: 60,borderRadius:30}}/>
        </View>
        <DrawerItemList {...props}/>
       
    </DrawerContentScrollView>
    <TouchableOpacity style={styles.opacity}>
    <Text>Log out</Text>
    </TouchableOpacity>
  
        </View>

    )
}
const DrawerNavigator=()=>{

    return(
    <Drawer.Navigator
     screenOptions={{headerShown:true,
        headerStyle:{backgroundColor:'transparent',
        elevation:0,
        shadowColor:0
    },
headerTitle:''
}} 
      drawerContent={(props)=><CustomDrawer {...props}/>}>
        <Drawer.Screen component ={Home}name="Home"/>
        <Drawer.Screen component ={Task}name="Task"/>
    </Drawer.Navigator>
    )
}
const styles = StyleSheet.create({
    container: {
  flexDirection:'row',
  justifyContent:'space-between',
  padding:20,
  alignItems:'center',
  backgroundColor:'#f6f6f6',
  marginBottom:20
     
    },
   
    Custom:{

        flex:1
    },
    opacity:{
        position:'absolute',
        bottom:50,
        left:0,
        right:0,
        backgroundColor:'#f6f6f6'
    }
   
  });

export default DrawerNavigator

