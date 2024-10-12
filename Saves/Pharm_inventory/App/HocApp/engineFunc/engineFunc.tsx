import { 

  documentDirectory,
  makeDirectoryAsync , 
  readAsStringAsync ,
  writeAsStringAsync

} from "expo-file-system";
import AlertComp from "../../ownerComp/alert/alertComp";

export const FolderNotExist = async ( 
  
  path: string , 
  { Initial_Page }: any 
  
  ): Promise < void > => 

  {

    try {

      await makeDirectoryAsync ( path )
        .then ( 

          async _ => 

            await writeAsStringAsync (

              path + "/folderData.txt" ,
              JSON.stringify ( [] ) ,
              {
                encoding: "utf8"
              }

            )

        )
        .then (
          
          async () =>

          await makeDirectoryAsync ( 
            documentDirectory + "/fileSnapSell"
          )

        )

        .then ( async _ => await Initial_Page () )

    } catch ( error ) {

      await AlertComp ("FolderNotExist")

    }

  }

export const FolderExist = async ( 

    path: string ,
    { setInternalData , Initial_Page }
    : { 

      setInternalData: ( _: object [] ) => Promise < void > ,
      Initial_Page: () => Promise <void>

    } 

  ): Promise < void > => 

  {

    try {

      let allData: string = await readAsStringAsync ( path + "/folderData.txt" )
      
      let parsed_data: object [] = JSON.parse ( allData )

      await setInternalData ( parsed_data )
      await Initial_Page ()

    } catch ( error ) {

      await  AlertComp ( "FolderExist" )

    }

  }