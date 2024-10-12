import React, { forwardRef } from "react";
import { TextInput } from "react-native";
import ContForm from "../contForm/contForm";
import AddInpNameStyle from "./addinpstyle";

const AddInp = forwardRef (

  ( { title , pl , value , setValue , kd , onEditing } : { title: string , pl: string , value: string , setValue: ( _: string ) => void , kd?: boolean , onEditing: () => void  }, ref: any ): JSX.Element => 

  <ContForm title = { title } >

    <TextInput 

      value = { value } 
      placeholder = { pl }
      placeholderTextColor = "#ffffff52"
      underlineColorAndroid = "transparent" 
      onChangeText = { txt => setValue ( txt ) }
      style = { AddInpNameStyle.inpT }
      keyboardType = { kd ? "decimal-pad" : "default" }
      ref = { ref }
      onEndEditing = { _ => onEditing () }

    /> 

  </ContForm>

) 

export default AddInp