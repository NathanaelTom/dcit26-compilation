import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../Style/global';
import IconAntDesign from 'react-native-vector-icons/AntDesign';


const Profile = ({ route }) => {
  const data = route.params;

  return (
    <View style={globalStyles.containerProfile}>
      <Image
        style={globalStyles.profileProfilePicture}
        source={{ uri: data.picture.large }}
      />

      <Text style={globalStyles.fontUserName}>
        {data.name.first} {data.name.last}
      </Text>

      <Text style={globalStyles.header}>
        <IconAntDesign name="user" size={20} /> About
      </Text>
      <Text style={globalStyles.fontUserInfo}>Age: {data.dob.age}</Text>
      <Text style={globalStyles.fontUserInfo}>Birthday: {data.dob.date}</Text>
      <Text style={globalStyles.fontUserInfo}>Gender: {data.gender}</Text>
      <Text style={globalStyles.fontUserInfo}>
        Address: {data.location.street.number} {data.location.street.name}{' '}
        {data.location.city} {data.location.state} {data.location.country}
      </Text>
      <Text></Text>
      <Text style={globalStyles.header}>
        <IconAntDesign name="mail" size={20} /> Contact
      </Text>
      <Text style={globalStyles.fontUserInfo}>Email: {data.email}</Text>
      <Text style={globalStyles.fontUserInfo}>Phone: {data.phone}</Text>
      <Text></Text>

      <Text style={globalStyles.header}>
        <IconAntDesign name="ellipsis1" size={20} /> Other
      </Text>

      <Text style={globalStyles.fontUserInfo}>
        Date Registed: {data.registered.date}
      </Text>
    </View>
  );
};

export default Profile;
