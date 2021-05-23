import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, ScrollView } from 'react-native';


import Home from '../screens/Home';
import Profile from '../screens/Profile';

const ZoroIcon = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  }

  return (
    <View style={{ flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer} >
        <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }} 
        style ={{ width: 25, height: 25, marginLeft: 15, marginRight: 10 }} />
      </TouchableOpacity>
    </View>

  );
}



const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={Home} 
        options={{
          title: 'Home',
          headerLeft: () => ( <ZoroIcon navigationProps={navigation} />),
          headerStyle: {
            backgroundColor: 'white',
          },
        }} />
        <Stack.Screen name="Profile" component={Profile} 
        options={{
          title: 'Profile',
          headerRight: () => ( <ZoroIcon navigationProps={navigation} />),
          headerStyle: {
            backgroundColor: 'pink',
          }
        }}
        />
      </Stack.Navigator>

  );
}
export default HomeStack;
