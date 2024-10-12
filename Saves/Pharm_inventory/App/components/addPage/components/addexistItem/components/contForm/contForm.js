import React from "react";
import { View , Text } from "react-native";
import ContFormStyle from "./contFormStyle";

const ContFormAddItem = ( { title , children } ) =>

  <View style = { ContFormStyle.cont } >

    <View

      style = {{
        
        ...ContFormStyle.contTxt,
        ...ContFormStyle.small 
      
      }}

    >
      <Text style = { ContFormStyle.txt } >
        { title }
      </Text>
    </View>

    <View 
    
      style = {{

        ...ContFormStyle.contTxt ,
        ...ContFormStyle.big 
        
      }}

    >
      { children }
    </View>
    
  </View>

export default ContFormAddItem