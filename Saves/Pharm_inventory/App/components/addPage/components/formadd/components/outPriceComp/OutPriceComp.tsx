import React from "react";
import { View , Text , TextInput } from "react-native";
import { compose } from "recompose";
import { GetOutPrice } from "../../Hocformadd/funcHocAddForm";
import HocOutPrice from "./HocOutPrice/HocOutPrice";
import OutPriceCompStyle from "./outPriceCompStyle";

const OutPriceComp = ( props: any ) => 

  <View style = { OutPriceCompStyle.cont } >

    <View style = {{

      ...OutPriceCompStyle.small ,
      ...OutPriceCompStyle.contTxt

    }}>
      <Text style = { OutPriceCompStyle.txt1 } >
        Prix sortie
      </Text>
    </View>
    <View style = {{

      ...OutPriceCompStyle.big ,
      ...OutPriceCompStyle.contTxt

    }}>
      <Text style = { OutPriceCompStyle.txt2 }>
        { GetOutPrice ( props ) === "null" ? "0" : GetOutPrice ( props ) }
      </Text>
    </View>

    <View style = {{

      ...OutPriceCompStyle.big ,
      ...OutPriceCompStyle.contTxt

      }}>
      <TextInput 

        value = { props.Prix_Reel } 
        placeholder = { `${ GetOutPrice ( props ) === "null" ? "0" : GetOutPrice ( props ) }` } 
        onChangeText = { _ => props.setPrix_Reel ( _ ) } 
        keyboardType = "decimal-pad"
        placeholderTextColor = "#ffffff4d"
        style = { OutPriceCompStyle.inp }

      />
      <Text style = { OutPriceCompStyle.txt1 } >
        Entez Reel Prix
      </Text>
    </View>

  </View>

export default compose ( HocOutPrice ) ( OutPriceComp )