import React from "react";
import { Text } from "react-native";
import ContFormAddItem from "../contForm/contForm";
import InfoShowStyle from "./infoShowstyle";

interface InfoProps {

  infoToShow: string ,
  title: string

}

const InfoShow = ( { infoToShow , title } : InfoProps ) : JSX.Element =>

  <ContFormAddItem title = { title } >
    <Text style = { InfoShowStyle.txt } >
        { infoToShow }
    </Text>
  </ContFormAddItem>

export default InfoShow   
