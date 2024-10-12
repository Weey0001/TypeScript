import React, { ComponentType, ReactText } from "react";
import { Picker } from "@react-native-community/picker";
import PickerCatStyle from "./pickerCatStyle";
import { PickerCatType } from "./interfacePickerCat";

const PickerCat = ( props: PickerCatType ) => 

  <Picker

    selectedValue = { props.category }
    onValueChange = { 
      
      ( itemValue: ReactText ) => 
        props.PickerCat ( itemValue ) 
      
    }
    style = { PickerCatStyle.contPick }
    itemStyle = { PickerCatStyle.item }

  >

    <Picker.Item 

      label = "Category" 
      value = "Category"
      color = "#333333e8"

    />   

    {
      
      props.allCat.length > 0 &&
      props.allCat.map ( 
      
        ( ele: any ): JSX.Element =>
          <Picker.Item
          
            label = { ele.Name }
            value = { ele }
            key = { ele.Id }
            color = "#333333e8"

          />
        
      )

    }

  </Picker>

export default PickerCat