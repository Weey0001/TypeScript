import React from "react";
import { Alert } from "react-native";

const AlertComp = async ( location: string ): Promise < void > => 

  Alert.alert (

    "Error" ,
    `Une erreur a ete trouver ${location}` ,
    [

      {

        text: "Cancel" ,
        onPress: () => console.log ( "Canceled" ) ,
        style: "cancel"
      
      } ,

      {

        text: "Ok" ,
        onPress: () => console.log ( "ok" ) ,
        style: "default"

      }

    ]

  )

export default AlertComp