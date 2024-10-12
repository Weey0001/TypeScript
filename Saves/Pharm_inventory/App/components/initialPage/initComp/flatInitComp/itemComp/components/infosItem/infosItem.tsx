import React from "react";
import { View , Button } from "react-native";
import { DataItemType } from "../../interfaceItemComp";
import InfoItem from "./infoitem/infoitem";

const InfosItem = ( 

    { dataItem , actionDel } 
    : {
        dataItem : DataItemType , 
        actionDel: any
      } 

  ): JSX.Element => 

  {

    let {

      Id ,
      Code_Bar ,
      name ,
      category ,
      Prix_Entre ,
      numInBoit ,
      marge ,
      outPrice ,
      minInStock ,
      TotalInStock ,
      valTva ,
      Benefices ,
      Prix_Reel ,
      BeneficesTotal ,
      Nombre_Boite
    
    } = dataItem

    return <View >

      <InfoItem

        title = "Code Bar"
        value = { Code_Bar }
        index = { 0 } />

      <InfoItem

        title = "Id"
        value = { Id }
        index = { 1 } />

      <InfoItem

        title = "Name"
        value = { name }
        index = { 2 } />

      <InfoItem

        title = "Categorie"
        value = { `${ category.Name }` }
        index = { 3 } />

      <InfoItem

        title = "Minimum d'unite en stock"
        value = { minInStock }
        index = { 4 } />

      <InfoItem

        title = "Prix d'entrer"
        value = { `${ Prix_Entre } .ar` }
        index = {5} />

      <InfoItem

        title = "Marge"
        value = { marge }
        index = { 6 } />

      <InfoItem

        title = "Valeur Tva"
        value = { `${ valTva } .ar` }
        index = { 7 } />

      <InfoItem

        title = "Prix de sortie"
        value = { `${ outPrice } .ar` }
        index = { 8 } />

      <InfoItem

        title = "Prix reel par unite"
        value = { `${ Prix_Reel } .ar` }
        index = { 9 } />

      <InfoItem

        title = "Beneficesice par unite"
        value = { `${ Benefices } .ar` }
        index = { 10 } />

      <InfoItem

        title = "Nombre de boites"
        value = { `${ Nombre_Boite }` }
        index = { 11 } />

      <InfoItem

        title = "Nombre d'unites dans une boite" 
        value = { `${ numInBoit }` }
        index = { 12 } />

      <InfoItem

        title = "Nombre totale d'unites"
        value = { `${ TotalInStock } ` }
        index = { 13 } />

      <InfoItem

        title = "Beneficesice Totale du stock"
        value = { `${ BeneficesTotal } .ar` }
        index = { 14 } />

      <Button

        color="#f00000d6"
        title = "Del"
        onPress = { actionDel } />

    </View>;
  }

export default InfosItem 