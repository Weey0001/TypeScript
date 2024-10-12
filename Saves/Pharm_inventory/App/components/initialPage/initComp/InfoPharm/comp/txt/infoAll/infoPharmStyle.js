import React from 'react';
import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const InfoPharmStyle = StyleSheet.create({
  
  cont: {

    alignItems: 'center' ,
    justifyContent: 'center',
    position: "absolute" ,
    zIndex: 100 ,
    top: width / 7 ,

  }

});

export default InfoPharmStyle