//Aterado, Nathanael Tom 
//Baloy, AnJoeNhil
//Lat, Edwin
//3-1
import React from "react";
import {View, Text, StyleSheet, Button, ImageBackground, Image, ScrollView} from "react-native";
import {globalStyles} from '../Style/global';

const Profile  =({navigation}) =>{
  return (
    <ScrollView>
    <View style={globalStyles.container}>
        <View style={globalStyles.imgOne}>
           <Image style={{ width: 250, height: 300, marginVertical: 15, marginTop: 20}}source={require('../assets/static-assets-upload7263181328323778411.jpg')}/>
           <Text style={globalStyles.titleStyle}>Name: </Text>
           <Text style={globalStyles.infoStyle}> Eiichiro Oda </Text>
           <Text style={globalStyles.titleStyle}> Birthday: </Text>
           <Text style={globalStyles.infoStyle}> January 1, 1975 </Text>
           <Text style={globalStyles.titleStyle}> Occupation: </Text>
           <Text style={globalStyles.infoStyle}> Mangaka,Comic Artists, Actor,Film Producer.  </Text>
           <Text style={globalStyles.titleStyle}> Education: </Text>
           <Text style={globalStyles.infoStyle}> Tokai University Kumamoto Campus  </Text>
           <Text style={globalStyles.titleStyle}> Relationships: </Text>
           <Text style={globalStyles.infoStyle}>Chiaki Inaba </Text>
   
            <Button
              //style = {styles.button}
              color="#EF0B5A"
              title= "Click for More" 
              onPress={()=>navigation.navigate('About')}
            />
            <Text style = {globalStyles.space}> 
            
            </Text>
            <Button
              //style = {styles.button}              
              color="#EF0B5A"  
              title= "Back to Home" 
              onPress={()=>navigation.goBack()}
            />
    
       </View>
    </View>  
    </ScrollView>
  );
}
export default Profile;

