//BSCS 3-1
//Activity #1
//Lat, Edwin Manuel
//Aterado, Nathanael Tom
//Baloy, AnJoeNhil T.

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

const App = () => {
  const onPressLearnMore = () => {
    alert('Hello World');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* enclose all components in this View tag */}
      <View style={styles.container}>
        <Text>Click Me</Text>
        {/* Button whith handler function named onPressLearnMore*/}
        <Button onPress={onPressLearnMore} title="Click It" color="#000000" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;