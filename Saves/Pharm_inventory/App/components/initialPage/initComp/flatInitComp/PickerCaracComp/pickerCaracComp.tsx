import React from "react";
import { View } from "react-native"
import BtnPickerCarac from "./comp/btnToShowPicker/BtnPickerCarac";
import PickerCarac from "./comp/PickerToShow/PickerCarac";
import PickerCaracStyle from "./pickerCaracStyle";

const PickerCaracComp = ( props: any ): JSX.Element =>

  <View style = { PickerCaracStyle.cont } >

    {

      props.caracShow
      &&
      <PickerCarac { ...props } />
      
    }

    <BtnPickerCarac actionBtn = { (): void => props.setCaracShow ( !props.caracShow ) } />

  </View>

export default PickerCaracComp