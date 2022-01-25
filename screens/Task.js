import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
const Task = () => {
  return(
      <View style={styles.container}>
       <Text>Task</Text>
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

export default Task;
