import React, { ReactNode } from "react";
import { View } from "react-native";
import BtnShow from "./components/infosItem/btnshow/btnShow";
import InfosItem from "./components/infosItem/infosItem";
import HocItemComp from "./HocItemComp/HocItemComp";
import { compose } from "recompose";
import { OnCheckStock } from "./components/infosItem/funcInfoItems/funcInfoItems";

const ItemComp = ( props: any ): JSX.Element => 

  <View

    style = {{

      backgroundColor: OnCheckStock( props.dataItem.Ratio ),

      marginTop: 10
      
    }}

  >

    <BtnShow

      actionBtn = { (): void => props.ShowInfo ( props.isInfo ) }
      name = { props.dataItem.name }
      txttoshow = { props.dataItem [ props.txttoshow ] }
    
    />

    {
      props.isInfo
      &&
      <InfosItem

        actionDel = { (): Promise<void> => props.DeletItem ( props.dataItem.Id ) }
        dataItem = { props.dataItem } 
      />
    }

  </View>

export default compose ( HocItemComp ) ( ItemComp )

