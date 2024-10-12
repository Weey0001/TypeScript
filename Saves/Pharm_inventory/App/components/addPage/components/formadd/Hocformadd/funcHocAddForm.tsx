import { writeAsStringAsync } from "expo-file-system"
import type { AddDataProps, BeneficesProps, GetOutPriceProps, ItemProps,  TotalInStockProps,  ValTvaProps , RatioProps } from "./funcInterface"

export const AddData = async ( props: AddDataProps ): Promise<void>  =>

  {

    let item: ItemProps = {

      Id: JSON.stringify ( new Date ().getTime () ) ,
      Code_Bar: props.Code_Bar ,
      name: props.name ,
      category: props.category ,
      multiple: JSON.stringify ( props.isMultiple ) ,
      Prix_Entre: props.Prix_Entre ,
      tva: JSON.stringify ( props.isTva ) ,
      Nombre_Boite : props.Nombre_Boite  ,
      numInBoit : props.isMultiple ? props.numInBoit : "1" ,
      marge: props.marge ,
      outPrice: GetOutPrice ( props ) ,
      minInStock: props.minInStock ,
      TotalInStock: TotalInStock ( props ),
      valTva: props.isTva ? ValTva ( props ) : "0" ,
      valTotalTva: props.isTva ? valTotalTva ( props ) : "0",
      Benefices: Benef ( props ) ,
      Prix_Reel: props.Prix_Reel ,
      BeneficesTotal: BeneficesTotal ( props ) ,
      Ratio: RatiO ( props )

    }

    let dataS:Array<any> = [ ...props.internalData ]
    
    let check : boolean = dataS.every ( ele => `${ele.name}` !== `${props.name}` )

    check ? notIn ( props , item ) : In ()

  }

  let valTotalTva = ( props: any ): string => 

    {

      let val: number = parseFloat ( ValTva ( props ) )
      let totalinstock: number = parseFloat ( TotalInStock ( props ) )
      
      let total: number = val * totalinstock

      return JSON.stringify ( total )

    }

  let In = () : void => 

  {

    console.log ( "Le nom de ce medicament existe deja" )

  }

  let notIn = async ( props:AddDataProps , item: any ): Promise<void> => 

  {

    let newData = [ ...props.internalData , item ]

    await writeAsStringAsync ( 
  
      props.PathDoc ,
      JSON.stringify ( newData ) ,
      {
        encoding: "utf8"
      }
      
    )
    await props.setInternalData ( [ ... props.internalData , item ] )
    await props.setName ( "" )
    await props.setCategory ( "Category" )
    await props.setMultiple ( false )
    await props.setPrix_Entre ( "" )
    await props.setTva ( false )
    await props.setMarge ( "1.32" )
    await props.setNumInBoit ( "1" )
    await props.setCode_Bar ( '' )
    await props.setPrix_Reel ( "" )
    await props.ToBarCodeViewer ()

  }

export let GetOutPrice = ( 
  
    {
    
      Prix_Entre ,
      marge ,
      numInBoit ,
      isTva ,
      isMultiple
    
    }: GetOutPriceProps 
  
  ) : string => 

  {

    let Prix_entre: number = parseFloat ( Prix_Entre )
    let maRge: number = parseFloat ( marge )
    let numinboit: number = parseFloat ( numInBoit )

    let boolTva: number = isTva ? 0.2 : 0
    let boolMult: number = isMultiple ? numinboit : 1
    let totalMarge: number =  maRge + boolTva
    let finalPrice: number = Prix_entre * totalMarge / boolMult

    let outPrice: number = Math.round ( finalPrice )

    return JSON.stringify ( outPrice )

  }

export const TotalInStock = ( 
    
    { 

      numInBoit , 
      isMultiple , 
      Nombre_Boite 

    } : TotalInStockProps 
  
  ) : string => 

  {

    let numinboit: number = parseFloat ( numInBoit )
    let multItem = isMultiple
    let Nombre_boite: number = parseFloat ( Nombre_Boite )
    
    let value: number = multItem ? numinboit : 1
    let total: number = Nombre_boite * value

    return JSON.stringify ( total )

  }

let ValTva = ( 

    { 

      Prix_Entre , 
      isMultiple , 
      numInBoit 

    } : ValTvaProps 

  ) : string => 

  {

    let Prix_entre: number = parseFloat ( Prix_Entre )
    let numinboit: number = parseFloat ( numInBoit )

    let boolMult: number = isMultiple ? numinboit : 1
    let value: number = Prix_entre * 20 / 100 / boolMult
    let finalValue: number = Math.floor ( value )

    return JSON.stringify ( finalValue )

  }

let Benef = (

    {

      Prix_Reel,
      Prix_Entre,
      isTva,
      isMultiple,
      numInBoit,

    }: BeneficesProps 

  ) : string => 

  {

    let Prix_reel: number = parseFloat ( Prix_Reel )
    let Prix_entre: number = parseFloat ( Prix_Entre )
    let boolTva: boolean = isTva 
    let boolMult: boolean = isMultiple 
    let numinboit: number = parseFloat ( numInBoit )

    let valTva: number = boolTva ? ( Prix_entre / 100 * 20 ) : 0
    let multItem: number = boolMult ? numinboit : 1
    let minusVal: number = ( Prix_entre + valTva ) / multItem
    let Beneficesice: number = Prix_reel - minusVal

    let outPrice: number = Math.floor ( Beneficesice )

    return JSON.stringify ( outPrice )

  }

let BeneficesTotal = ( props: AddDataProps ): string => 

  {

    let Benefices: number = parseFloat ( Benef ( props ) )
    let Nombre_Boite: number = parseFloat ( props.Nombre_Boite )
    let numinboit: number = parseFloat ( props.numInBoit )
    let boolMult: boolean = props.isMultiple 
    let multItem: number = boolMult ? numinboit : 1
    
    let totalBenefices: number = Benefices * Nombre_Boite * multItem
    let outPrice: number = Math.floor ( totalBenefices )

    return JSON.stringify ( outPrice )

  }

let RatiO = ( props: any ): string =>
  
  {

    let totalinstock: number = parseFloat ( TotalInStock ( props ) )
    let mininstock: number = parseFloat ( props.minInStock )

    let value: number = totalinstock / mininstock

    let mathValue = Math.round ( value )

    return JSON.stringify ( mathValue )

  }
