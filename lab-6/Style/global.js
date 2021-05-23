import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  homeProfilePicture: {
    width: 300,
    height: 300,
    marginHorizontal: 100,
    marginVertical: 15,
    marginBottom: 100,
    marginTop: 30,
    resizeMode: 'cover',
  },
  fontUserName: {
    padding: 5,
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -100,
  },
  fontUserInfo: {
    adding: 5,
    color: 'black',
    textAlign: 'left',
    fontSize: 12,
    marginTop: 0,
  },
  profileProfilePicture: {
    width: 100,
    height: 100,
    marginHorizontal: 100,
    marginVertical: 15,
    marginBottom: 100,
    marginTop: 30,
    resizeMode: 'cover',
    alignItems: 'center'
  },
  containerProfile: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 50,
    bottom: 200,
    left: 5,
    right: 5,
  },
  header: {
    color: 'gray',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'Bold',
    borderBottomWidth: 1
  }



});
