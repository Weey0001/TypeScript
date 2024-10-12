import React from "react";
import ContCat from "../sheredElement/Catcont";
import InpCatNew from "./inpCatNew/inpContNew";

const SecondShow = ( props: any ): JSX.Element => 

  <ContCat
    
    tit1 = "+" 
    col1 = "#155ea2e8"
    act1 = { (): void =>  props.AddNewCat ( props ) }

    tit2 = "Back"
    col2 = "#a21515e8"
    act2 = { props.FirstShow }

  >
    <InpCatNew { ...props } />
  </ContCat>

export default SecondShow