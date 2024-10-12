import React from "react";
import { TouchableOpacity , View , Text } from "react-native";
import SellBtnStyle from "./sellBtnStyle";

const SellBtn = ( { BtnAction , title }: { title: string , BtnAction: () => void } ): JSX.Element => 

  <TouchableOpacity
  
    onPress = { (): void => BtnAction () }
    style = { SellBtnStyle.too }

  >

    <View style = { SellBtnStyle.contTxt }>
      <Text style = { SellBtnStyle.txt }>
        { title }
      </Text>
    </View>

  </TouchableOpacity>

export default SellBtn