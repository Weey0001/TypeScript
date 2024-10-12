import { 

  compose ,
  withState ,
  lifecycle ,
  withHandlers 

} from "recompose";
import { AddData } from "./funcHocAddForm";

let addName = withState (

  "name" ,
  "setName" ,
  ""

)

let addCategory = withState (

  "category" ,
  "setCategory" ,
  {

    Id : "Category" ,
    Name : "Category"

  }

)

let addMultiple = withState (

  "isMultiple" ,
  "setMultiple" ,
  false

)

let addPrix_Entre = withState (

  'Prix_Entre' ,
  "setPrix_Entre" ,
  ""

)

let addTva = withState (

  "isTva" ,
  "setTva" ,
  false

)

let addMarge = withState (

  "marge" ,
  "setMarge" ,
  "1.32"

)

let addNumInBoit = withState (

  "numInBoit" ,
  "setNumInBoit" ,
  ""

)

let minInstock = withState (

  "minInStock" ,
  "setMinInStock" ,
  ""

)

let addNombre_Boite = withState ( 

  "Nombre_Boite" ,
  "setNombre_Boite" ,
  ""

)

let addPrix_Reel = withState (

  "Prix_Reel" ,
  "setPrix_Reel" ,
  ""

)

let addHandlers = withHandlers ({

  addData: ( props: any ) => (): Promise<void> => AddData ( props )

})

let addLifecycle = lifecycle ({

  shouldComponentUpdate () {

    return true

  }

})

export default compose (

  addMultiple ,
  addPrix_Reel ,
  addTva ,
  addPrix_Entre ,
  addNumInBoit ,
  addNombre_Boite ,
  addCategory ,
  addMarge ,
  addName ,
  minInstock ,
  addHandlers ,
  addLifecycle  

)