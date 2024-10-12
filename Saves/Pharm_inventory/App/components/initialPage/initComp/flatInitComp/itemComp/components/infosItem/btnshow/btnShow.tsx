import React from "react";
import { 
  
  TouchableWithoutFeedback ,
  View ,
  Text

} from "react-native";
import BtnShowStyle from "./btnshowStyle";

const BtnShow = (

  { actionBtn , name , txttoshow }
  : { 
      actionBtn: any, 
      name: string ,
      txttoshow: string
    }

  ): JSX.Element => 

    <TouchableWithoutFeedback 
      
      style = { BtnShowStyle.towf } 
      onPress = { actionBtn }
    
    > 

      <View style = { BtnShowStyle.cont } >
        <Text style = { BtnShowStyle.txt }>
        { name }
        </Text>  

        <Text style = { BtnShowStyle.txt } >

          { txttoshow }

        </Text>
      </View>
      
    </TouchableWithoutFeedback>
    



export default BtnShow