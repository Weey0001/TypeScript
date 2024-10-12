import { documentDirectory, getInfoAsync, makeDirectoryAsync, writeAsStringAsync } from "expo-file-system"
import AlertComp from "../../../ownerComp/alert/alertComp";
import { DataItemType } from "../../initialPage/initComp/flatInitComp/itemComp/interfaceItemComp";
import type { AddBarCodeType } from "./interfaceAddPage";

export const addBarCode = async ( data: string , props: AddBarCodeType ): Promise<void> => 

  {
    
    await props.ToLoadingAddPage ()
    await props.setCode_Bar ( data )

    let itemExistence = props.internalData.some ( ele => ele.Code_Bar === data )

    itemExistence ? 

      await ItemExistenceFunc ( props , data )
      : await props.ToAddForm ()

  }

const ItemExistenceFunc = async ( props: AddBarCodeType , data: string ): Promise<void> => 

  {

    let DataItemExist = props.internalData.find ( ele => ele.Code_Bar === data )

    await props.setExistingItemName ( DataItemExist )
    await props.ToAddItem () 

  }

export const UpdatedItem = async ( props: AddBarCodeType ): Promise<void> => 

  {

      let {

      Id ,
      Code_Bar ,
      name ,
      category ,
      multiple ,
      Prix_Entre ,
      tva ,
      valTva ,
      numInBoit ,
      marge ,
      outPrice ,
      minInStock ,
      Prix_Reel ,
      Benefices ,
      Nombre_Boite ,
      Ratio

    } = props.existingItemName

    let updatedItem = {

      Id: Id,
      Code_Bar: Code_Bar ,
      name: name ,
      category: category ,
      multiple: multiple ,
      Prix_Entre: Prix_Entre ,
      tva: tva ,
      valTva: valTva ,
      numInBoit : numInBoit ,
      marge: marge ,
      outPrice: outPrice,
      minInStock: minInStock ,
      TotalInStock: UpdatedTotalStock ( props ) ,
      Prix_Reel: Prix_Reel ,
      Benefices: Benefices ,
      BeneficesTotal: UpdatedBeneficesTotal ( props , Benefices ) ,
      Nombre_Boite : UpdatedNbrBoit ( props.numToAdd , Nombre_Boite ) ,
      Ratio: RatiO ( props )

    }

    if ( parseFloat ( props.numToAdd ) < 0 || parseFloat ( props.unitToAdd ) < 0 )

    {

      await addTimestampUpdated ( props )
      // console.log( "go")

    }

    let filtredData: DataItemType [] = props.internalData.filter ( ele => ele !== props.existingItemName )

    let newArray: DataItemType [] = [ ...filtredData , updatedItem ]

    let newJSON: string = JSON.stringify ( newArray )

    try {

      await props.setInternalData ( newArray )

      await writeAsStringAsync ( 

        props.PathDoc ,
        newJSON ,
        { 
          encoding: "utf8"
        }

      ) .then ( async (): Promise<void> => await props.ToBarCodeViewer () )

    } catch ( error ) {
      
      AlertComp ( "addPage" )

    }

  }

let UpdatedTotalStock = ( props: AddBarCodeType ): string => 

  {

    let { numToAdd , existingItemName , unitToAdd }: {
      numToAdd: string , existingItemName: DataItemType , unitToAdd: string
    } = props 
    let { TotalInStock , numInBoit }: { TotalInStock: string , numInBoit: string } = existingItemName

    let totalinstock: number = parseFloat ( TotalInStock )
    let numinboit: number = parseFloat ( numInBoit )

    if ( unitToAdd !== "" )

    {

      let unittoadd = parseFloat ( unitToAdd )

      let value = unittoadd + totalinstock

      let nbrValue = Math.floor ( value )

      return JSON.stringify ( nbrValue )

    } else {

      let numtoadd: number = parseFloat ( numToAdd === "" ? "0" : numToAdd )
      
      let value: number = numtoadd * numinboit + totalinstock

      let nbrValue: number = Math.floor ( value )

      return JSON.stringify ( nbrValue )

    }


  }

let UpdatedBeneficesTotal = ( props: AddBarCodeType , Benefices: string ): string => 

  {

    let Benef: number = parseFloat ( Benefices )
    let updatedTotalStock: number = parseFloat ( UpdatedTotalStock ( props ) )

    let value: number = Benef * updatedTotalStock
    let nbrValue: number = Math.floor ( value )

    return JSON.stringify ( nbrValue )

  }

let UpdatedNbrBoit = ( numToAdd: string , Nombre_Boite: string ): string => 

  {

    let numtoadd: number = parseFloat ( numToAdd === '' ? "0" : numToAdd )
    let Nombre_boite: number = parseFloat ( Nombre_Boite ) 
    
    let value: number = numtoadd + Nombre_boite
    let nbrValue: number = Math.floor ( value )

    return JSON.stringify ( nbrValue )

  }

let RatiO = ( props: any ): string => 

  {

    let updatedtotalstock: string = UpdatedTotalStock ( props ) 
    let totalStock: number = parseFloat ( updatedtotalstock )

    let mininstock: number = parseFloat ( props.existingItemName.minInStock )

    let ratioNum: number = totalStock / mininstock

    let ratio: number = Math.round ( ratioNum )

    return JSON.stringify ( ratio )

  }

let addTimestampUpdated = async ( props: any ): Promise<void> => 

  {

    let booFile = await getInfoAsync ( 
      documentDirectory + '/fileSnapSell'
    )

    booFile.isDirectory ? 

      await SnapFileExist ( props )
      :await SnapFileNotExist ( props )

  }

let SnapFileNotExist = async ( props: any ): Promise<void> => 

  {

    await makeDirectoryAsync ( 
      documentDirectory + "/fileSnapSell"
    )
    .then ( async _ => await SnapFileExist ( props ))

  }

let SnapFileExist = async ( props: any ): Promise<void> => 

{

  let snapshot = JSON.stringify ( new Date ().getTime () )
  let { existingItemName , numToAdd , unitToAdd } = props

  let { Id , name , Prix_Reel , Benefices } = existingItemName

  let snpItem = {

    Id: Id ,
    name: name ,
    Prix_Reel: Prix_Reel , 
    Benefices: Benefices ,
    numToAdd: numToAdd === "" ? "0": numToAdd ,
    unitToAdd: unitToAdd === "" ? "0": unitToAdd ,
    Prix_Total : Totalsnap ( props )  ,
    addedAt: snapshot ,
    totalTva: TotalValTva ( props )

  }

  let newSell = JSON.stringify ( snpItem )

  await writeAsStringAsync (

    documentDirectory + "/fileSnapSell" + `/${snapshot}.txt` ,
    newSell ,
    {
      encoding: "utf8"
    }
  )

}

let TotalValTva = ( props: any ): string | undefined => 

  {

    let numtoadd: number = parseFloat ( props.numToAdd === "" ? "0": props.numToAdd )
    let unittoadd: number = parseFloat ( props.unitToAdd === "" ? "0": props.unitToAdd) 
    let numinboit: number = parseFloat ( props.existingItemName.numInBoit )
    let valtva: number = parseFloat ( props.existingItemName.valTva )

    if ( numtoadd !== 0 )
    {

      let totalTva: number = numtoadd * numinboit * valtva

      return JSON.stringify ( Math.abs( totalTva ) )

    } else if ( unittoadd !== 0 ) 

    {

      let totalTva: number = unittoadd * valtva

      return JSON.stringify ( Math.abs ( totalTva ) )

    }

  }

let Totalsnap = ( props: any ): string | undefined => 

  {

    let numtoadd: number = parseFloat ( props.numToAdd === "" ? "0": props.numToAdd )
    let unittoadd: number = parseFloat ( props.unitToAdd === "" ? "0": props.unitToAdd) 
    let prix_reel: number = parseFloat ( props.existingItemName.Prix_Reel )
    let numinboit: number = parseFloat ( props.existingItemName.numInBoit )

    if ( numtoadd !== 0 )
    {

      let Prix_Total: number = numtoadd * numinboit * prix_reel

      return JSON.stringify ( Prix_Total )

    } else if ( unittoadd !== 0 ) 

    {

      let Prix_Total: number = unittoadd * prix_reel

      return JSON.stringify ( Prix_Total )

    }

  }