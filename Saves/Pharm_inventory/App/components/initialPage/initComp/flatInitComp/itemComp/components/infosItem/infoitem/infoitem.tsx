import React from "react";
import { View , Text } from "react-native";
import InfoItemStyle from "./infoitemstyle";

const InfoItem = ( 
  
  { title , value , index } 
  : {
    
    title: string ,
    value: string ,
    index: number

  }

  ): JSX.Element => 

  <View 

    style = {{ 

      ...InfoItemStyle.cont ,
      backgroundColor: index%2 === 0 ? "#616161bd" : "#c7c7c7bd" ,
      padding: 10
      
    }}

  >
    
    <Text style = { InfoItemStyle.txt }>
      { title }
    </Text>

    <Text style = {{ 
      
      ...InfoItemStyle.txt ,
      flexGrow: 1 ,
      textAlign: "right"
      
    }}>
      { value }
    </Text>

  </View>

export default InfoItem