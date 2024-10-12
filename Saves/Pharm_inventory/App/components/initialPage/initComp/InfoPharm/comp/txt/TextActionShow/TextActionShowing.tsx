import React from "react"
import { View , Text } from "react-native";
import TextActionShowingStyle from "./TextAdtionShowingStyle";

const TextActionShowing = (
  { 

    TextActionShowing , 
    title , 
    index , 
    type ,
    isPrice

  } : { 

    TextActionShowing: any , 
    title: string , 
    index: number , 
    type: number ,
    isPrice?: boolean

  }): JSX.Element => 

  <View style = {{ ... TextActionShowingStyle.cont , backgroundColor: index%2 === 0 ? "#000000d4" : "#0000008f" }}>

    <Text style = { TextActionShowingStyle.txt } >
      { title }
    </Text>

    <Text 
      
      style = {{ 

        ... TextActionShowingStyle.txt ,
        textAlign:'right' 

      }}

    >

      { ( type === 0 ? TextActionShowing : TextActionShowing () ) + (isPrice ? ".ar": "") }

    </Text>

  </View>

export default TextActionShowing