import React from "react";
import { View } from "react-native";
import ContStyle from "./contStyle";

const ContAdd = ( { children }: { children: JSX.Element } ): JSX.Element => 

  <View style = { ContStyle.cont }>
    { children }
  </View>

export default ContAdd