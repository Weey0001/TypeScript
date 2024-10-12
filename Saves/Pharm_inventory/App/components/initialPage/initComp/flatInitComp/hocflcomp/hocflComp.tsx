import { 
  
  compose ,
  lifecycle ,
  withHandlers ,
  withState

} from "recompose";
import { FiltredDataType } from "../../../HocInit_page/interfaceInit_page";
import { AllItems, DeleteItem, SearchedData } from "./funcHocflcomp";

let addFiltreMethode = withState(

  'filtreMeth' ,
  'setFiltreMeth' ,
  'emptyFiltre'

)

let addTxtToSearch = withState (

  "txtToSearch" ,
  "setTxtToSearch" ,
  ""

)

let addFiltredData = withState(
  
    'filtredData' ,
    'setFiltredData' ,
    []
  
  )

let addToshowItemBtn = withState (

  "txttoshow" ,
  "setTxtToShow" ,
  "Prix_Reel"

)

let addShowCarac = withState (

  "caracShow" ,
  "setCaracShow" ,
  false

)

let addHandlers = withHandlers({
    
  DeletItem: ( props: any) => ( id: string ) => DeleteItem ( props , id ) ,
  TxtToSearch: () => async ( props: any , txt: string ) => await SearchedData ( props , txt) ,
  AllItems: ( { setFiltredData , internalData }: FiltredDataType ) => (): void => AllItems ({ setFiltredData , internalData })

})

let addLifeCycle = lifecycle ({

  shouldComponentUpdate () {

    return true

  }
  
})

export default compose (

  addFiltreMethode ,
  addTxtToSearch ,
  addToshowItemBtn ,
  addShowCarac ,
  addFiltredData ,
  addHandlers ,
  addLifeCycle

)