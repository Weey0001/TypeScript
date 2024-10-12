import React , { useRef } from "react";
import {  View } from "react-native";
import HocFromAdd from "./Hocformadd/HocFromAdd";
import { compose } from "recompose"
import AddInp from "./components/AddInp/addInp";
import AddCat from "./components/addCat/addCat";
import OutPriceComp from "./components/outPriceComp/OutPriceComp";
import FormAddStyle from "./formAddStyle";
import MultComp from "./components/addProptoPrice/Multcomp/multComp";
import MargeTvaMinInStock from "./components/addProptoPrice/margtvaminstock/margTvaMinStock";
import IdCodeComp from "./components/idCodeComp/idCodeComp";
import StateComp from "./components/stateComp/stateComp";

const AddFrom = ( props: any ): JSX.Element => 

  {

    let nameRef:any = useRef ()
    let Prix_EntreRef:any = useRef ()
    let Nombre_BoitesRef:any = useRef ()
    let numInBoitRef:any = useRef ()
    let margeRef:any = useRef ()
    let minInStockRef:any = useRef ()

    return (
      
      <View style = { FormAddStyle.cont } >

        <IdCodeComp { ...props } />

        <AddInp 
          
          title = "Nom"
          pl = "Nom de l'article"
          value = { props.name } 
          setValue = { props.setName }
          ref = { nameRef }
          onEditing = { ():void => Prix_EntreRef.current.focus () }
        
        />

        <AddInp
          
          title = " Prix"
          pl = "Prix d'achat"
          value = { props.Prix_Entre }
          setValue = { props.setPrix_Entre }
          kd = { true }
          ref = { Prix_EntreRef }
          onEditing = { (): void => Nombre_BoitesRef.current.focus () }

        />

        <AddCat { ...props } />

        <MultComp 
        
          ref = {{ numInBoitRef , Nombre_BoitesRef }}
          onMultActiv = { (): void => numInBoitRef.current.focus () }
          onEndEditing = { (): void => margeRef.current.focus () }
          { ...props } 
        
        /> 
        <MargeTvaMinInStock 
        
          ref = {{ margeRef , minInStockRef }}
          onEndEditingMarge = { (): void => minInStockRef.current.focus () }
          { ...props } 
          
        />
        <OutPriceComp { ...props } />
        <StateComp { ...props } />

      </View>

    )

  }

export default compose ( HocFromAdd ) ( AddFrom )