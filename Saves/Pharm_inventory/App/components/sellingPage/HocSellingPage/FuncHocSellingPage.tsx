import { deleteAsync, documentDirectory, getInfoAsync, readAsStringAsync, readDirectoryAsync } from "expo-file-system"

export const AllSelledItems = async ( props: any ): Promise<void> => 

  {

    let infoPage = await getInfoAsync (

      documentDirectory + "/fileSnapSell"

    )

    // await deleteAsync ( documentDirectory + "/fileSnapSell" )

    if ( infoPage.isDirectory ) {

      let filesFromDirectory = await readDirectoryAsync ( documentDirectory + "/fileSnapSell" )

      let allDataSell: any[] = filesFromDirectory.map (

        async ele => 

          {

            let data = await readAsStringAsync (

              documentDirectory + "/fileSnapSell" + `/${ ele }` ,
              {
                encoding: "utf8"
              }

            )

            return JSON.parse ( data )
          }

      )
      
      await props.setAllSell ( allDataSell )

    } else {

      await props.setAllSell ([])

    }

  }