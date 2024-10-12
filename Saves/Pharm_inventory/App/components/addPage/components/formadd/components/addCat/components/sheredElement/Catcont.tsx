import React from "react";
import { View } from "react-native";
import BtnAction from "./BtnAction";
import CatContStyle from "./catContStyle";

const ContCat = ( { tit1 , tit2 , col1 , col2 , act1 , act2 , children }: { tit1: string , tit2: string , col1: string , col2: string , act1: any , act2: any , children: JSX.Element } ): JSX.Element => 

  <View style = { CatContStyle.cont }>

    <View style = {
      {

        ...CatContStyle.contTxt ,
        ...CatContStyle.big

      }
    }>
      { children } 
    </View>

    <BtnAction
    
      ActionBtn = { act1 }
      title = { tit1 }
      colorBtn = { col1 }

    /> 

    <BtnAction
        
      ActionBtn = { act2 }
      title = { tit2 }
      colorBtn = { col2 }

    /> 

  </View>

export default ContCat
