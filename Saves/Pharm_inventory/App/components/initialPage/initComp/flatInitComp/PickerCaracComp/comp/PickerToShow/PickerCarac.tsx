import React, { ReactText } from "react";
import { Picker } from "@react-native-community/picker" ;
import { View } from "react-native";
import { ForSomme, ForView } from "../../../../InfoPharm/comp/txt/infoAll/ForSommeData";
import PickerCaracStyle from "./PickerCaracStyle";

const PickerCarac = ( props: any ): JSX.Element => 

  <View style = { PickerCaracStyle.cont }>

    <Picker

      selectedValue = { props.txttoshow }
      onValueChange = { 
        
        ( itemValue: ReactText ) => props.setTxtToShow ( itemValue ) 
        
      }
      style = { PickerCaracStyle.contPick }
      itemStyle = { PickerCaracStyle.item }

    > 

    {
      
      ForView&&
      ForView.map ( 
      
        ( ele: any ): JSX.Element =>
          <Picker.Item
          
            label = { ele.title }
            value = { ele.title }
            key = { ele.title }
            color = "#333333e8"

          />
        
      )

    }

    </Picker>

  </View>

export default PickerCarac