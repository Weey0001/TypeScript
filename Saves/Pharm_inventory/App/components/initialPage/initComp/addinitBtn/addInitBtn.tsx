import React from "react";
import { View , Button , TouchableOpacity , Text } from "react-native";
import AddInitBtnStyle from "./addInitBtnStyle";

const AddInitBtn = ( { BtnAction }: { BtnAction: () => void }): JSX.Element => 

  <TouchableOpacity

    onPress = { (): void => BtnAction () } 
    style = { AddInitBtnStyle.cont }

  >

      <View style = { AddInitBtnStyle.contTxt }>
        <Text style = { AddInitBtnStyle.txt }> + </Text>
      </View>    

  </TouchableOpacity>




export default AddInitBtn