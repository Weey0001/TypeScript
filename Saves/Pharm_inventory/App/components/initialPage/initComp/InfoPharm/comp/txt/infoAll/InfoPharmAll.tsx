import React from "react";
import { View } from "react-native";
import { ForSommeTypes, InfoShowingTypes } from "../../../../../HocInit_page/interfaceInit_page";
import { DataItemType } from "../../../../flatInitComp/itemComp/interfaceItemComp";
import TextActionShowing from "../TextActionShow/TextActionShowing";
import { ForSomme } from "./ForSommeData";
import InfoPharmStyle from "./infoPharmStyle";



const InfoPharmAll = ( props: DataItemType&InfoShowingTypes ): JSX.Element =>

  <View style = { InfoPharmStyle.cont }>

    <TextActionShowing 
    
      TextActionShowing = { props.catlenght }
      title = "Nombre de categories de medicaments "
      index = { 1 }
      type = { 0 }

    />

    {

      props.infoPharmState&&ForSomme.map ( ( ele: ForSommeTypes , index: number ): JSX.Element => 

        <TextActionShowing 
    
          TextActionShowing = { ():string => props.SommeInStock ( ele.title ) }
          title = { ele.subTitle }
          index = { index }
          key = { index }
          type = { 1 }
          isPrice = { ele.isPrice }

        />

      )

    }

  </View>

export default InfoPharmAll