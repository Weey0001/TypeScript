import {

  documentDirectory ,
  getInfoAsync

} from "expo-file-system"
import AlertComp from "../ownerComp/alert/alertComp"
import { FolderExist, FolderNotExist } from "./engineFunc/engineFunc"

let Path: string = documentDirectory + "/DataFolder"

export let CheckFolder = async ( props: any ): Promise<void> => {

  try {

    let Folder_existe = await getInfoAsync ( Path )

    let Folder_Bool: boolean = Folder_existe.isDirectory

    ! Folder_Bool ?
      await FolderNotExist ( Path , props )
      : await FolderExist ( Path , props )

  } catch ( error ) {

    AlertComp ("HocApp")

  }

}


