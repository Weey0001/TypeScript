import React from "react";
import { TextInput, View } from "react-native";
import { DataItemType } from "../../../../../../../../../initialPage/initComp/flatInitComp/itemComp/interfaceItemComp";
import InpNombre_BoitesStyle from "../../../numBoit/components/inpNumBoit/inpNumBoitStyle";
import SmallInfo from "../../../smallinfo/smalInfo";

export const UnitIn = ( props: any ) => <SmallInfo infoToShow = { <CompUnitToAdd { ...props } /> }title = { props.title } />

const FuncCompUnitIn = ( { numToAdd , existingItemName }: { numToAdd: string , existingItemName: DataItemType } ): string => 

  {
    
    let valNumtoadd = numToAdd === "" ? "0" : numToAdd 
    let numtoadd: number = parseFloat ( valNumtoadd )
    let numInBoit: number = parseFloat ( existingItemName.numInBoit )

    let totalVal = numtoadd * numInBoit
    let total = Math.round ( totalVal )

    return JSON.stringify ( total )

  }


export const UnitOut = ( props: any ): JSX.Element => <SmallInfo infoToShow = { FuncCompUnitOut ( props ) } title = { props.title }/>

const FuncCompUnitOut = ( { numToAdd , existingItemName }: { numToAdd: string , existingItemName: DataItemType } ): string => 

  {

    let compIn: number = parseFloat( FuncCompUnitIn ( { numToAdd , existingItemName } ) )
    let totalinstock: number = parseFloat ( existingItemName.TotalInStock )

    let totalVal = compIn + totalinstock
    let total = Math.round ( totalVal )

    return JSON.stringify ( total )

  }

interface UnitToAddType {

  unitToAdd: string ,
  setUnitToAdd: ( _: string ) => void ,
  numToAdd: string ,
  existingItemName: DataItemType

}

  const CompUnitToAdd = ( props: UnitToAddType ): JSX.Element => 

  <View>
    <TextInput 

      value = { props.unitToAdd } 
      placeholder = { FuncCompUnitOut ( props ) }
      placeholderTextColor = "#ffffff4f"
      style = { InpNombre_BoitesStyle.inpS }
      onChangeText = { _ => props.setUnitToAdd ( _ ) } 

    />
  </View>