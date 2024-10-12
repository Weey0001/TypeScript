import type { DataItemType } from "../../initialPage/initComp/flatInitComp/itemComp/interfaceItemComp";

interface AddBarCodeType {

  ToLoadingAddPage: () => Promise<void> ,
  setCode_Bar: ( _:string ) => Promise<void> ,
  internalData: DataItemType [] ,
  ToAddForm: () => Promise<void> ,
  setExistingItemName: ( _: DataItemType | undefined ) => Promise<void> ,
  ToAddItem: () => Promise<void> ,
  existingItemName: DataItemType ,
  numToAdd: string ,
  setInternalData: ( _: DataItemType [] ) => Promise<void> ,
  PathDoc: string ,
  ToBarCodeViewer: () => Promise<void> ,
  unitToAdd: string

}

export type {

  AddBarCodeType

}