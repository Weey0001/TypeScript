import React from "react";
import { View } from "react-native";
import AddBoit from "./components/addBoit/addBoit";
import InfoShow from "./components/infoShow/infoShow";
import StateCompAddItem from "./components/stateComp/stateComp";

const AddItem = props => 

  <View>

    <InfoShow 

        title = "IdCode" 
        infoToShow = { props.Code_Bar } 

    />

    <InfoShow 

      title = "Name" 
      infoToShow = { props.existingItemName.name } 

    />

    <InfoShow 

      title = "Id" 
      infoToShow = { props.existingItemName.Id } 

    />

    <AddBoit { ...props } />

    <StateCompAddItem { ...props } />
  </View>

export default AddItem