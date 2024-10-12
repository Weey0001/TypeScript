import { ReactText } from "react";

interface PickerCatType {

  category: number | undefined | string ,
  allCat: CatTypePicker [] ,
  PickerCat: ( _: ReactText ) => void ,

}

interface CatTypePicker {

  Id: string | ReactText | undefined ,
  Name: string | ReactText | undefined

}

export type {

  PickerCatType , 
  CatTypePicker

}