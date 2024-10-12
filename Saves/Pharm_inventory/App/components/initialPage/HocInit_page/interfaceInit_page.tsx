import { DataItemType } from "../initComp/flatInitComp/itemComp/interfaceItemComp";

interface InfoPharmStateHandler {

  infoPharmState: boolean , 
  setInfoPharmState: ( _: boolean ) => void ,
  internalData: DataItemType []

}

interface InfoShowingTypes {

  SommeInStock: ( _: any ) => string ,
  CatNumber: (_:any) => Promise<void> ,
  infoPharmState: boolean ,  
  catlenght: string

}

interface ForSommeTypes {

  title: string ,
  subTitle: string ,
  isPrice?: boolean

}

interface FiltredDataType {
  
  internalData: DataItemType [] ,
  setFiltredData: ( _: DataItemType [] ) => void

}

export type {

  InfoPharmStateHandler ,
  InfoShowingTypes ,
  ForSommeTypes ,
  FiltredDataType

}