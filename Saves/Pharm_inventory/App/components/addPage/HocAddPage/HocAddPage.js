import { 
  
  compose ,
  withState ,
  lifecycle ,
  withHandlers ,
  withReducer

} from "recompose";
import { addBarCode, UpdatedItem } from "./funcAddPage";

let addCode_Bar = withState (

  "Code_Bar" ,
  "setCode_Bar" ,
  ""

)

let addToExistItem = withState (

  "existingItemName" ,
  "setExistingItemName" ,
  ""

)

let addNumToAdd = withState (

  "numToAdd" ,
  "setNumToAdd" ,
  ""

)

let addUnitToAdd = withState (

  "unitToAdd" ,
  "setUnitToAdd" ,
  ""

)

let actionReducer = ( actionAddPage , action ) => {

  switch ( action.type ) {

    case "BarCodeViewer":
      return actionAddPage = "BarCodeViewer"

    case "AddForm":
      return actionAddPage = "AddForm"

    case "AddItem":
      return actionAddPage = "AddItem"
    
    case "ToLoadingPage":
      return actionAddPage = "LoadingPage"
    
    default:
      return actionAddPage = "BarCodeViewer"

  }

}

let addReducer = withReducer (

  "actionAddPage" ,
  "dispatch" ,
  actionReducer ,
  "BarCodeViewer"

)

let addHandlers = withHandlers({

  AddBarCode: _ => ( data , props ) => addBarCode ( data , props ) ,
  ToBarCodeViewer: props => _ => props.dispatch ( { type : "BarCodeViewer" } ) ,
  ToAddForm: props => _ => props.dispatch ( { type: "AddForm" } ) ,
  ToAddItem: props => _ => props.dispatch ( { type: "AddItem" } ) ,
  
  ToLoadingAddPage: props => _ => props.dispatch ( { type: "LoadingPage" } ) ,
  UpdatedItem: _ => props => UpdatedItem ( props )

})

let addLyfeCyle = lifecycle ({

  shouldComponentUpdate ()

  {

    return true

  }

})

export default compose (

  addNumToAdd ,
  addUnitToAdd ,
  addCode_Bar ,
  addToExistItem ,
  addReducer ,
  addHandlers ,
  addLyfeCyle

)