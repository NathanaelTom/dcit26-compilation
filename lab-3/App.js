//Aterado, Nathanael Tom 
//Baloy, AnJoeNhil
//Lat, Edwin
//3-1

import React, {useState} from 'react';
import {StyleSheet,Text,View,Button,Image,ScrollView} from 'react-native';

import SampleModal from './components/SampleModal';

export default function App(){
  const [isModalOpen, setIsModalOpen] = useState (false);


  return (
    <View style = {styles.container}>
      <Button title = 'Click Me' onPress = {() => setIsModalOpen(true)}/>
      <SampleModal visible = {isModalOpen} onClose = {() => setIsModalOpen(false)}/>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
});
