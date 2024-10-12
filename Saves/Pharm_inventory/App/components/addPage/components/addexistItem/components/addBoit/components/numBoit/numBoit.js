import React from "react";
import { View } from "react-native";
import ContStyle from "../contStyle/contStyle";
import SmallInfo from "../smallinfo/smalInfo";
import { compose } from "recompose";
import { NumTotal, NumtotalBoit } from "./components/numTotal/numTotal";
import HocNumBoit from './HocNumBoit/HocNumBoit';
import InpNombre_Boites from "./components/inpNumBoit/inpNumBoit";

const Nombre_Boites = props => 

  <View style = { ContStyle.cont } >

    <SmallInfo infoToShow = "Nbrs Bts" />
    <NumTotal { ...props } title = "En Stock" />
    <InpNombre_Boites { ...props } title = "Bts +"/>
    <NumtotalBoit { ...props } title = "Bts Ttls" />

  </View>

export default compose ( HocNumBoit ) ( Nombre_Boites )