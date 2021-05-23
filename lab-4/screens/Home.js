//Aterado, Nathanael Tom 
//Baloy, AnJoeNhil
//Lat, Edwin
//3-1
import React from "react";
import {View, Image, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView} from "react-native";
import {globalStyles} from '../Style/global';

const Home  =({navigation}) =>{
  return (
    <ScrollView >
      <View style={globalStyles.container}>
       
          <View style={globalStyles.imgOne}>
           <Image style={{ width: 400, height: 250, marginVertical: 20, marginTop: 15}}  source={require('../assets/Eiichiro-Oda.jpg')}/>
           <Text style={{justifyContent: 'center', fontSize: 14, padding: 7, textAlign: 'center'}}>
         Eiichiro Oda, born January 1, 1975 in Kumamoto City,Kumamoto Prefecture in Japan, is a professional mangaka, best known as the creator of the manga One Piece.
           </Text>
           <Text> </Text>
            <Button 
              color="#EF0B5A"
              
              title= "Oda's Profile" 
              onPress={()=>navigation.navigate('Profile')}
            />
         </View>
       
      </View>  
    </ScrollView>
  );
}

export default Home;