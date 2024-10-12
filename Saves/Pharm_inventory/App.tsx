import React from 'react';
import AppBody from './App/AppBody';
import { LogBox, StatusBar , View } from "react-native";

LogBox.ignoreLogs(["React.createFactory()"])

const App = () : JSX.Element =>

  <View style = { { flex: 1 } } >
    
    <AppBody />
    <StatusBar hidden = { true } />
    
  </View>


export default App