import { useState } from "react";
import
  {
    TextInput,
    View,
    StyleSheet,
    Alert,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
  } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButtons";
import Colors from "../constants/colors";
// @ts-ignore
import Title from "../components/ui/TItle";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

let StartGameScreen = ({onPickNumber}: any) =>
{
  let [enteredNumber, setEnteredNumber] = useState('')

  let { width, height } = useWindowDimensions()
  let numberInputHandler = (enteredText: string) =>
  {
    setEnteredNumber(enteredText)
  }

  let resetInputHandler = () =>
  {
    setEnteredNumber('')
    console.log("reset")
  }

  let confirmInputHandler = () =>
  {
    const chosenNumber = parseInt(enteredNumber)  

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
    {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputHandler
        }]
      )
      return;
    }
    onPickNumber(chosenNumber)
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]} >
          
          <Title>Guess My Number</Title>

          <Card>

            <InstructionText >Enter a number</InstructionText>

            <TextInput
              style={styles.numberInput}
              keyboardType="number-pad"
              maxLength={2}
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />

            <View style={styles.buttonsContainer} >

              <View style = {styles.buttonContainer} >
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>

              <View style = {styles.buttonContainer} >
                <PrimaryButton onPress = {confirmInputHandler}>Confirm</PrimaryButton>  
              </View>
        
            </View>

          </Card>  
        
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    // marginTop: 100,
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 24,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
})


