import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import About from '../screens/About';

const LuffyIcon = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  }

  return (
    <View style={{ flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer} >
        <Image source={{ uri: ' ' }} 
        style ={{ width: 25, height: 25, marginLeft: 10 }} />
      </TouchableOpacity>
    </View>

  );
}

const Stack = createStackNavigator();

const AboutStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="About" 
        component={About} 
        options={{
          title: 'About',
          headerLeft: () => ( <LuffyIcon navigationProps=   {navigation} />),
          headerStyle: {
            backgroundColor: 'pink',
          }
        }}/>
      </Stack.Navigator>
  );
}
export default AboutStack;
