import React from "react";
import { View } from "react-native-animatable";
import ContStyle from "./containerStyle";

interface _Props {

  children: JSX.Element

}

const ContainerApp = ( _: _Props ): JSX.Element => 

  <View 
    
    useNativeDriver = { true }
    animation = "bounceIn"
    style = { ContStyle.container }

  >
    { _.children }
  </View>

export default ContainerApp