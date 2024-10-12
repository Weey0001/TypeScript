import React from "react";
import { Text } from "react-native";
import ContForm from "../contForm/contForm";
import IdCodeCompStyle from "./idcodecompstyle";

const IdCodeComp = ( { Code_Bar }: { Code_Bar: string } ): JSX.Element =>

  <ContForm title = "IdCode" >
    <Text style = { IdCodeCompStyle.txt } >
        { Code_Bar }
    </Text>
  </ContForm>

export default IdCodeComp      