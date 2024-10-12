import React from "react";
import { compose } from "recompose";
import HocAddCat from "./HocAddCat/HocAddCat";
import FirstShow from "./components/firstShow/firstShow";
import SecondShow from "./components/secondShow/secondShow";
import { View } from "react-native"
import AddCatStyle from "./addCatStyle";

const AddCat = ( props: any ): JSX.Element => 

  <View style = { AddCatStyle.cont }>

      {

        props.actionCat === "first_show" ?
        <FirstShow { ...props } />
        : props.actionCat === "second_show" ?
        <SecondShow { ...props } />
        : props.FirstShow ()

      }

  </View>

export default compose ( HocAddCat ) ( AddCat )