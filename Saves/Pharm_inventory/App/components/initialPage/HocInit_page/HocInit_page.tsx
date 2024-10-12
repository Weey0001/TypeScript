import { 

  compose ,
  withHandlers ,
  withState ,
  lifecycle

} from "recompose";
import { CatNumber, SommeInStock } from "./FuncHocInit_Page";
import { InfoPharmStateHandler } from "./interfaceInit_page";

let addState = withState ( 

  "totalBenefices" ,
  "setTotalBenefices" ,
  ""

)

let showInfoPharm = withState (

  "infoPharmState" ,
  "setInfoPharmState" ,
  false

)

let addLenCat = withState (

  "catlenght" ,
  "setCatLenght" ,
  ''

)

let addHandlers =  withHandlers({

  SommeInStock: ( { internalData }: InfoPharmStateHandler ) => ( title: string ): string => SommeInStock ( internalData , title ) ,
  ShowInfoPharm: ( { infoPharmState , setInfoPharmState }: InfoPharmStateHandler ) => () => setInfoPharmState ( !infoPharmState ) ,
  

})

let addLifeCycle = lifecycle ({

  async componentDidMount () {

    await CatNumber ( this.props )

  } ,

  shouldComponentUpdate () 
  
  {

    return true
  
  }

})

export default compose (

  addState ,
  addLenCat ,
  showInfoPharm ,
  addLifeCycle ,
  addHandlers ,

)