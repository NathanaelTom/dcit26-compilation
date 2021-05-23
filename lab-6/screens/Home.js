import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { globalStyles } from '../Style/global';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] =useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
    .then ((response) => response.json())
    .then ((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }
  
  useEffect (() =>{
    fetchRandomData();
  }, []);

  return( 
    <View style={globalStyles.container}>
      <View>
      {isLoading ? <ActivityIndicator  size="large" color="#0000ff"/> : (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>  
            <Image style= {globalStyles.homeProfilePicture} source={{uri: data.picture.large}} />
          </TouchableOpacity> 
          <Text style={globalStyles.fontUserName}>{data.name.first} {data.name.last}</Text>
        </View>
      )}
      { isLoading ? true: (
            <View style={{ height: 100,  alignItems: 'center'}}>
              <Button title ="Random User" color= "blue" onPress={() => {fetchRandomData();}  } />
            </View>
        )}

    </View>  

    </View>
  );
};

export default Home;


