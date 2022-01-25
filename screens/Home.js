import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native'
const Home = ({navigation}) => {
  return(
      <View style={styles.container}>
       <Text>Home</Text>
       <Button onPress={()=>navigation.openDrawer()}title='test'/>
      </View>

  )
};
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20,
      alignItems:'center',
      justifyContent:'center'
     
    },
   
  });

export default Home;
