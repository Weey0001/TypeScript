import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BtnInfoPharmStyle from "./BtnInfoPharmStyle";

const BtnInfoPharm = ( { ActionBtn }: { ActionBtn: () => void } ): JSX.Element => 

  <TouchableOpacity
  
    onPress = { (): void => ActionBtn () }

  >
    <View style = { BtnInfoPharmStyle.contTxt } >
      <Text style = { BtnInfoPharmStyle.txt } >

        Vue Gelerale du stock

      </Text>
    </View>
  </TouchableOpacity>

export default BtnInfoPharm

