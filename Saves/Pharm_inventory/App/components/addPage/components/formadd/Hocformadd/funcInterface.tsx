import { DataItemType } from "../../../../initialPage/initComp/flatInitComp/itemComp/interfaceItemComp";

interface AddDataProps {

  Code_Bar: string ,
  name: string ,
  isMultiple: boolean ,
  Prix_Entre: string ,
  isTva: boolean ,
  Nombre_Boite: string ,
  numInBoit: string ,
  marge: string ,
  minInStock: string ,
  Prix_Reel: string ,
  internalData: DataItemType [] ,
  PathDoc: string ,
  setInternalData: ( _ : DataItemType [] ) => Promise<void> ,
  setName: ( _ : string ) => Promise<void> ,
  setCategory: ( _ : string ) => Promise<void> ,
  setMultiple: ( _ : boolean ) => Promise<void> ,
  setPrix_Entre: ( _ : string ) => Promise<void> ,
  setTva: ( _ : boolean ) => Promise<void> ,
  setMarge: ( _ : string ) => Promise<void> ,
  setNumInBoit: ( _ : string ) => Promise<void> ,
  setCode_Bar: ( _ : string ) => Promise<void> ,
  setPrix_Reel: ( _ : string ) => Promise<void> ,
  ToBarCodeViewer: () => Promise<void>
  TotalInStock: string ,
  category: string ,

}

interface ItemProps {

  Id: string ,
  Code_Bar: string ,
  name: string ,
  category: string ,
  multiple: string ,
  Prix_Entre: string ,
  tva: string ,
  Nombre_Boite : string  ,
  numInBoit : string ,
  marge: string ,
  outPrice: string ,
  minInStock: string ,
  TotalInStock: string ,
  valTva: string ,
  Benefices: string ,
  Prix_Reel: string ,
  BeneficesTotal: string ,
  Ratio: string ,
  valTotalTva: string 

}

interface GetOutPriceProps {

  Prix_Entre: string ,
  marge: string ,
  numInBoit: string ,
  isTva: boolean ,
  isMultiple: boolean 

}

interface TotalInStockProps {

  isMultiple: boolean ,
  numInBoit: string,
  Nombre_Boite: string

}

interface ValTvaProps {

  Prix_Entre: string ,
  isMultiple: boolean ,
  numInBoit: string ,
  TotalInStock?: any

}

interface BeneficesProps {

  Prix_Reel: string ,
  Prix_Entre: string ,
  isTva: boolean ,
  isMultiple: boolean ,
  numInBoit: string ,

}

interface RatioProps {

  minInStock: string ,
  TotalInStock: string

}

export type { 

  AddDataProps ,
  ItemProps ,
  GetOutPriceProps ,
  TotalInStockProps ,
  ValTvaProps ,
  BeneficesProps ,
  RatioProps

}