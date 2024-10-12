import React from "react";
import { View } from "react-native";
import BtnState from "../../../components/BtnState/BtnState";
import StateCompStyle from "./stateCompStyle";

const StateCompAddItem = props => 

  <View style = { StateCompStyle.cont }>

    <BtnState
    
      ActionBtn = { _ => props.UpdatedItem ( props ) }
      txt = "Valider"
      col = "#29706dbd"

    />

    <BtnState
    
      ActionBtn = { props.Initial_Page }
      txt = "All items"
      col = "#4f4f4fbd"

    />
    
  </View>

export default StateCompAddItem