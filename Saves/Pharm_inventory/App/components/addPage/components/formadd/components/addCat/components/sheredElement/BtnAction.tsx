import React from "react";
import { View , TouchableOpacity ,Text } from "react-native";
import BtnActionStyle from "./BtnActionStyle";

const BtnAction = ( { ActionBtn , title , colorBtn }: { ActionBtn: any , title: string , colorBtn: string } ): JSX.Element => 

  <TouchableOpacity 
    onPress = { ActionBtn }
  >
    <View 
    
      style = {{ 

        backgroundColor: colorBtn ,
        ...BtnActionStyle.contTxt ,
        ...BtnActionStyle.small

      }}

    >

        <Text style = { BtnActionStyle.txt } >
          { title }
        </Text>

    </View>
  </TouchableOpacity> 

export default BtnAction