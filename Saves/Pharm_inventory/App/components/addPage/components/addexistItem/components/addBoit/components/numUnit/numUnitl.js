import React from "react";
import { View } from "react-native";
import ContStyle from "../contStyle/contStyle";
import SmallInfo from "../smallinfo/smalInfo";
import { UnitIn, UnitOut } from "./components/unitIn/unitIn";

const NumUnit = props => 

  <View style = { ContStyle.cont } >

    <SmallInfo infoToShow = "Nbrs UnitS" />
    <SmallInfo infoToShow = { props.existingItemName.TotalInStock } title = "En Stock" />
    <UnitIn { ...props } title = "Unit +"/>
    <UnitOut { ...props } title = "Unit Ttls" />

  </View>

export default NumUnit