import React from "react";
import {  

  TouchableOpacity ,
  View ,
  Text

} from "react-native";
import { BtnStateType } from "./btnStateInterface";
import BtnStateStyle from "./BtnStateStyle";

const BtnState = ( { ActionBtn , txt , col }: BtnStateType ): JSX.Element => 

  <View style = { { backgroundColor: col , ...BtnStateStyle.cont } } >

    <TouchableOpacity 

      style = { BtnStateStyle.to } 
      onPress = { _ => ActionBtn () } 

    >

      <Text style = { BtnStateStyle.txt } >

        { txt }

      </Text>

    </TouchableOpacity>

  </View>

export default BtnState