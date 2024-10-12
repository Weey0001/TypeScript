import React from "react";
import { 

  View , 
  ActivityIndicator

} from "react-native";
import LoadPageStyle from "./loadPageStyle";

let LoadingPage = (): JSX.Element => 

  <View style = { LoadPageStyle.cont } >

    <ActivityIndicator 
    
      size = "large"
      color = "red"

    />
    
  </View>

export default LoadingPage