import React from "react";
import { View } from "react-native";
import BtnInfoPharm from "./comp/btn/BtnInfoPharm";
import InfoPharmAll from "./comp/txt/infoAll/InfoPharmAll";

const InfoPharm = ( props: any ): JSX.Element => 

  <View style = {{alignItems:"center" , justifyContent: "center"}}>

    <BtnInfoPharm ActionBtn = { props.ShowInfoPharm } />

    {

      props.infoPharmState 
      &&
      <InfoPharmAll { ...props } />

    }

  </View>

export default InfoPharm