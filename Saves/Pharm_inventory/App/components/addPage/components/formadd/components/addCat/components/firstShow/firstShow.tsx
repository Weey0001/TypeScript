import React from "react";
import PickerCat from "./pickerCat/pickerCat";
import ContCat from "../sheredElement/Catcont";

const FirstShow = ( props: any ): JSX.Element => 

  <ContCat
  
    tit1 = "Add" 
    col1 = "#155ea2e8"
    act1 = { props.SecondShow }

    tit2 = "Rem"
    col2 = "#a21515e8"
    act2 = { (): void => props.RemvCat ( props ) }

  >

    <PickerCat { ...props } />

  </ContCat>

export default FirstShow

