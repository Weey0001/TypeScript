import React from "react";
import { View , TextInput } from "react-native";
import InpCatNewStyle from "./inpCatNewStyle";

const InpCatNew = ( { newCat , SetNewCat }: { newCat: string , SetNewCat: ( _: string ) => void } ): JSX.Element => 

  <View style = { InpCatNewStyle.cont } >

    <TextInput 

      style = { InpCatNewStyle.inp }
      value = { newCat } 
      placeholder = "Nouvelle Category" 
      underlineColorAndroid = "transparent"
      placeholderTextColor= "#ffffff45"
      onChangeText = { txt => SetNewCat ( txt ) } 

      
    />    

  </View>


export default InpCatNew