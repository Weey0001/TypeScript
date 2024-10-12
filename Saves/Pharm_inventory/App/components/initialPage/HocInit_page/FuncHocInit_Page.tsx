import { documentDirectory, readAsStringAsync, readDirectoryAsync } from "expo-file-system"
import { CatTypePicker } from "../../addPage/components/formadd/components/addCat/components/firstShow/pickerCat/interfacePickerCat"
import { DataItemType } from "../initComp/flatInitComp/itemComp/interfaceItemComp"

export const SommeInStock = ( data: DataItemType [] , title: string ): string => 

  {

    let Total: number = data.reduce ( ( memo , ele: any ) => 
      
      {

        let total: number = parseFloat ( ele[title] )

        return memo + total
      
      } , 0
    
    )

    return `${ Total }`

  }

export const CatNumber = async ( props: any ): Promise<void> => {

  let  allCat: string  = await readAsStringAsync ( documentDirectory + '/DataFolder/Category.txt' )

  let parsed_cat : CatTypePicker [] = JSON.parse ( allCat )

  let len: number = parsed_cat.length

  await props.setCatLenght ( `${ len }` )

}

