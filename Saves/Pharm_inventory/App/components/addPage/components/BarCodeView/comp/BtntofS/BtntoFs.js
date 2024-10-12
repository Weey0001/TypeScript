import React from "react";
import { View , TouchableOpacity ,Text } from "react-native";
import BtntofsStyle from "./BtntofsStyle";

const Btntofs = ( { ActionBtn } ) => 

  <TouchableOpacity 

    style = { BtntofsStyle.to }
    onPress = { ActionBtn }
  >
    <View 
    
      style = {{ 

        ...BtntofsStyle.contTxt ,
        ...BtntofsStyle.small

      }}

    >

      <Text style = { BtntofsStyle.txt } >
        { "All" }
      </Text>

    </View>
  </TouchableOpacity> 

export default Btntofs