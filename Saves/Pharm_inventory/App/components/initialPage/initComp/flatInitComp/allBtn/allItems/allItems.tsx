import React from "react";
import { TouchableOpacity , View , Text } from "react-native";
import AllItemBtnStyle from "./allItemBtnStyle";

const AllItemBtn = ( props : any ): JSX.Element => 

  <TouchableOpacity
  
    onPress = { (): void => props.AllItems () }
    style = { AllItemBtnStyle.too }

  >

    <View style = { AllItemBtnStyle.contTxt }>
      <Text style = { AllItemBtnStyle.txt }>
        All
      </Text>
    </View>

  </TouchableOpacity>

export default AllItemBtn