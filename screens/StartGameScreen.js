import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from '../constants/colors';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

    function resetInputHandler() {
        setEnteredNumber('')
    }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber); //change the entered numnber to a number type from a string
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // if the entered text is not a number or it is a number but smaller or email to 0 or if choosen number is greater than 99,then show an alert
      // show alert
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99"
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //android only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.65,
  },

  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
