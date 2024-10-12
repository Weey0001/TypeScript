import { documentDirectory, getInfoAsync, makeDirectoryAsync, readAsStringAsync, writeAsStringAsync } from "expo-file-system"
import AlertComp from "../../../../../../../ownerComp/alert/alertComp"
import { CatFuncProps , CatType } from "./interfaceAddCat"


let PathDir: string = documentDirectory + '/DataFolder'
let Path: string = PathDir + '/Category.txt'

export const GetAllCat = async ( { setAllCat }: CatFuncProps | any ): Promise<void> =>

  {

    try {

      let catFolderExist = await getInfoAsync ( Path )

      catFolderExist.exists ?
        CatFoldExist ( Path , setAllCat )
        : CatFolderCreate ( Path , setAllCat )

    } catch ( error ) {

      AlertComp ( "addCats" )

    }

  }

const CatFoldExist = async ( Path: string , setAllCat: CatFuncProps | any ): Promise <void> => {

  try {

    let rs: string = await readAsStringAsync (

      Path ,
      {
        encoding: "utf8"
      }

    )

    let parsed_cat: CatType [] = JSON.parse ( rs )

    await setAllCat ( parsed_cat ) 
    
  } catch ( error ) {
    
    await AlertComp ( "CatFolderExist" )

  }

}

const CatFolderCreate = async ( Path: string , setAllCat: CatFuncProps | any ): Promise <void> => {

  try {

    await makeDirectoryAsync (

      PathDir ,
      {
        intermediates: true
      }

    ) 
    .then ( async _ => await CreateFileCat ( Path , setAllCat ) )

    
  } catch (error) {

    await AlertComp ("CatFolderCreate")
  
  }

}

const CreateFileCat = async (  Path: string , setAllCat: CatFuncProps | any  ): Promise <void> => {

  try {
    
    await writeAsStringAsync ( 
      
      Path , 
      JSON.stringify ( [] ) , 
      {
    
        encoding: "utf8" 
      
      } 
    
    )

    await setAllCat ( [] )

  } catch (error) {

    await AlertComp ( "CreateFileCat" )
  
  }


}

export const AddNewCat = async ( props: CatFuncProps | any ): Promise<void> =>

  {
    
    try {

      let newCatProp: CatType = {

        Id: new Date ().getTime () ,
        Name: props.newCat

      }

      let allnewCat: CatType [] = [ ...props.allCat , newCatProp ]

      await props.setAllCat ( allnewCat )
      await editCatFile ( props , allnewCat )  

    } catch ( error ) {
      
      console.log ( error )

    }

  }

  export const RemvCat = async ( props: CatFuncProps | any ): Promise<void> =>

  {

    try {

      let allnewCat = props.allCat.filter ( ( ele: CatType ) => ele.Id !== props.category.Id )

      await props.setAllCat ( allnewCat )
      await editCatFile ( props , allnewCat )  

    } catch ( error ) {
      
      console.log ( error )

    }

  }



let editCatFile = async ( props: CatFuncProps | any , newArray: CatType [] ): Promise<void>  => 

  {

    await writeAsStringAsync ( 

      Path ,  
      JSON.stringify ( newArray ) ,
      {
        encoding: "utf8"
      }

    )
    .then ( async _ => await props.FirstShow () )

  }