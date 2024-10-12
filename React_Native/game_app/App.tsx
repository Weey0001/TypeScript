import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen  from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from "./screens/GameOverSreen";

import Colors from "./constants/colors";
import { LinearGradient } from 'expo-linear-gradient';

let App = () =>
{

  let [userNumber, setUserNumber] = useState<any>()
  let [gameIsOver, setGameIsOver] = useState(true)
  let [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return null;
  }

  SplashScreen.hideAsync();

  let pickedNumberHandler = (pickedNumber: any) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  let gameOverHandler = (numberOfRounds: any) => {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }
  let startNewGameHandler = () => {
    setUserNumber(null)
    setGuessRounds(0)

  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }

  return (
    <>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={[Colors.primary700, Colors.primary500]}
        style={styles.rootstyle}
      >
        <ImageBackground
          source={require('./assets/images/0.jpg')}
          style={styles.rootstyle}
          resizeMode='cover'
          imageStyle={{ opacity: 0.15 }}
        >
          <SafeAreaView style={styles.rootstyle}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

export default App

let styles = StyleSheet.create({
  rootstyle: {
    flex: 1
  }
})