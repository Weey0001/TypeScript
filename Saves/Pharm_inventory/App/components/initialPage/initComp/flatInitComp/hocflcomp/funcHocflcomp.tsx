import { writeAsStringAsync } from "expo-file-system"
import { FiltredDataType } from "../../../HocInit_page/interfaceInit_page"
import { DataItemType } from "../itemComp/interfaceItemComp"

export const DeleteItem = async ( props: {
  internalData: DataItemType [] ,
  PathDoc: string ,
  setInternalData: ( _: any ) => Promise<void> ,
  filtredData : DataItemType [] ,
  setFiltredData: ( _: DataItemType [] ) => Promise<void>
} , Id: string ) => 

  {

    let newData: DataItemType [] = [ ...props.internalData.filter ( ( ele: { Id: string }): boolean => ele.Id !== Id ) ]

    let newData2: DataItemType [] = [ ...props.filtredData.filter ( ( ele: { Id: string }): boolean => ele.Id !== Id ) ]


    await writeAsStringAsync ( 
    
      props.PathDoc ,
      JSON.stringify ( newData ) ,
      {
        encoding: "utf8"
      }

    )
    
    await props.setFiltredData ( newData2 )
    await props.setInternalData ( newData )
  }

export const SearchedData = async ( props: any , txt: string ): Promise<void> => 

  {
    let tofind = new RegExp ( txt , 'i' )
    let data: any [] = [ ...props.internalData ]

    let findedData = data
      .filter ( ele =>
      tofind.test ( ele.name ) )
      .sort ( ( a , b ) => a.name.localeCompare ( b.name ) )

    await props.setTxtToSearch ( txt )
    await props.setFiltredData ( findedData )

  }

export const AllItems = ( { internalData , setFiltredData }: FiltredDataType ): void => {

  let sortingData = internalData.sort ( ( a , b ) => a.name.localeCompare ( b.name ))
  setFiltredData ( sortingData )

}