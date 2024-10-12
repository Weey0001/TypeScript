import React from "react";
import { View , TextInput , Button } from "react-native";
import InpInPageStyle from "./inpInPageStyle";

const InpCompIn_Page = ( props: any ): JSX.Element => 

  <View style = { InpInPageStyle.cont } >

    <TextInput

      style = { InpInPageStyle.inp }
      value = { props.txtToSearch }
      onChangeText = { txt => props.setTxtToSearch ( txt ) }
      placeholder = "Recherche"
      placeholderTextColor = "#ffffff66"

    />

    <Button

      title = "find"
      onPress = { () => props.TxtToSearch ( props , props.txtToSearch ) }
      color = "#001ac270"

    />

  </View>

export default InpCompIn_Page