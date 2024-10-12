import React from "react";
import SmallInfoStyle from "./smallInfoStyle";
import { View , Text } from "react-native";


const SmallInfo = ( { infoToShow , title } : { infoToShow: JSX.Element | string , title: string } ): JSX.Element => 

  <View

    style = {{
      
      ...SmallInfoStyle.contTxt,
      ...SmallInfoStyle.small 

    }}

  >
    <Text style = { SmallInfoStyle.txt } >
      { infoToShow }
    </Text>
    {
      title ? 
        <Text style = { SmallInfoStyle.txt1 }>
          { title }
        </Text> 
        : null
    }
  </View>

export default SmallInfo