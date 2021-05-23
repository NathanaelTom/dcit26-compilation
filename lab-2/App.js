//Nathanael Aterado
//Abigael Casas
//Anjoenhil Baloy
//Edwin Lat

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';

export default function App() {
  const [enteredName, setEnteredName] = useState('');
  const [dragonName, setDragonName] = useState([]);
  const nameInputHandler = (enteredText) => {
    setEnteredName(enteredText);
  };
  const addNameHandler = () => {
    if (enteredName == '') {
      alert('Enter Item');
    } else {
      setDragonName([...dragonName, enteredName]);
      setEnteredName('');
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputDragon}>
        <TextInput
          title="addText"
          placeholder="Enter Item"
          style={styles.input}
          onChangeText={nameInputHandler}
          value={enteredName}
        />
        <Button title="ADD" onPress={addNameHandler} />
      </View>
      <View>
        {dragonName.map((item) => (
          <View style={styles.listItem}>
            <Text key={item}> {item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    backgroundColor: 'WHITE',
  },

  inputDragon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 3,
    borderColor: 'black',
    borderWidth: 2,
  },
});
