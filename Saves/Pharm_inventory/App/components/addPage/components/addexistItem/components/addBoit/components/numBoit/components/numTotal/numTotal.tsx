import React from "react";
import { View , Text } from "react-native";
import { DataItemType } from "../../../../../../../../../initialPage/initComp/flatInitComp/itemComp/interfaceItemComp";
import SmallInfo from "../../../smallinfo/smalInfo";
import numTotalStyle from "./numTotalStyle";

export const NumTotal = ( props: any ): JSX.Element => <SmallInfo infoToShow = { <CompTotal { ...props } />} title = { props.title } />

const CompTotal = ( { existingItemName }: { existingItemName: DataItemType} ): JSX.Element => 

  <View>
    <Text style = { numTotalStyle.txt } >
      { FuncCompTotal ( existingItemName ) }
    </Text>
  </View>

const FuncCompTotal = ( props: DataItemType ): string =>
  
  {

    let totalinstock: number = parseFloat ( props.TotalInStock )
    let boolCT: string = props.multiple
    let numInBoit: number = parseFloat ( props.numInBoit )

    let boolNumInBoit: number = boolCT === "true" ? numInBoit : 1

    let total: number = totalinstock / boolNumInBoit

    return JSON.stringify ( total )

  }

export const NumtotalBoit = ( props: any ): JSX.Element => <SmallInfo infoToShow = { <CompTotalBoit { ...props }/> } title = { props.title } />

const CompTotalBoit = ( { existingItemName , numToAdd }: { existingItemName: DataItemType , numToAdd: string } ): JSX.Element => 

  <View>
    <Text style = { numTotalStyle.txt } >
      { FuncCompTotalBoit ( existingItemName , numToAdd ) }
    </Text>
    
  </View>

const FuncCompTotalBoit = ( existingItemName: DataItemType, numToAdd: string ): string => 

  {

    let TotalComp: number = parseFloat ( FuncCompTotal ( existingItemName ) )
    let boolMultAdd: string = numToAdd === "" ? "0" : numToAdd
    let numtoadd: number = parseFloat ( boolMultAdd )
    let total: number = TotalComp + numtoadd 

    return JSON.stringify ( total )

  }
