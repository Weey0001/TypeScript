import React from "react";
import { TextInput , View } from "react-native";
import SmallInfo from "../../../smallinfo/smalInfo";
import InpNombre_BoitesStyle from "./inpNumBoitStyle";

interface CompNombre_BoitesType {

  numToAdd: string ,
  setNumToAdd: ( _: string ) => void

}

const InpNombre_Boites = ( props: any ): JSX.Element => <SmallInfo infoToShow = { <CompNombre_Boites { ...props } /> } title = { props.title } />

const CompNombre_Boites = ( props: CompNombre_BoitesType ): JSX.Element => 

  <View>
    <TextInput 

      value = { props.numToAdd } 
      placeholder = "nbre" 
      placeholderTextColor = "#ffffff4f"
      style = { InpNombre_BoitesStyle.inpS }
      onChangeText = { _ => props.setNumToAdd ( _ ) } 

    />
  </View>


export default InpNombre_Boites