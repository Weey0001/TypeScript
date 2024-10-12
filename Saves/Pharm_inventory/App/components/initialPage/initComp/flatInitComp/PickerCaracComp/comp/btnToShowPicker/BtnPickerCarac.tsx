import React from "react";
import { 

  TouchableOpacity ,
  View ,
  Text

} from "react-native";
import BtnCaracStyle from "./btnCatacStyle";

const BtnPickerCarac = ( { actionBtn }: { actionBtn: () => void } ): JSX.Element => 

  <TouchableOpacity
  
    onPress = { (): void => actionBtn () }
    style = { BtnCaracStyle.too }

  >

    <View style = { BtnCaracStyle.contTxt } >

      <Text style = { BtnCaracStyle.txt } >

        View

      </Text>

    </View>

  </TouchableOpacity>

export default BtnPickerCarac