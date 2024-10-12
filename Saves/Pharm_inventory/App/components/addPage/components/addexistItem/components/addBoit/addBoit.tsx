import React from "react";
import { compose } from "recompose";
import HocAddBoit from "./HocAddBoit/HocAddBoit";
import { View } from "react-native";
import NumUnit from "./components/numUnit/numUnitl";
import Nombre_Boites from "./components/numBoit/numBoit";

const AddBoit = ( props: any ): JSX.Element => 

  <View>

    <Nombre_Boites { ...props } />
    {
      props.existingItemName.multiple === "true" ?
        <NumUnit { ...props } />
        : null
    }
    
  </View>  

export default compose ( HocAddBoit ) ( AddBoit )