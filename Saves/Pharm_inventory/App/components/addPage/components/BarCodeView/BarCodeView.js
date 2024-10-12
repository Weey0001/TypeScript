import React from "react";
import { BarCodeScanner , Constants } from "expo-barcode-scanner";
import BarCodeViewStyle from "./BarCodeViewStyle";
import Btntofs from "./comp/BtntofS/BtntoFs";

const BarCodeView = props => 

  <BarCodeScanner 

    type = 'back'
    barCodeTypes = { Constants.Type }
    onBarCodeScanned = { ( { data } ) => props.AddBarCode ( data , props ) }
    style = { BarCodeViewStyle.cont }
    focusable = { false }
    collapsable = { false }

  > 

    <Btntofs ActionBtn = { props.Initial_Page }/>

  </BarCodeScanner>

export default BarCodeView