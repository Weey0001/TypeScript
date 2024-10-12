import React from "react"
import { View } from "react-native";
import INITStyle from "./initStyle";
import { compose } from "recompose";
import HocInit_page from "./HocInit_page/HocInit_page";
import FlatInitComp from "./initComp/flatInitComp/flatinitComp";
import InfoPharm from "./initComp/InfoPharm/infoPharm";


const InitialPage = ( props: any ): JSX.Element => 

  <View style = { INITStyle.cont } >

    <InfoPharm { ...props} />
    <FlatInitComp { ...props } />

  </View>

export default compose ( HocInit_page ) ( InitialPage )