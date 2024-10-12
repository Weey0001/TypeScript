import { documentDirectory } from "expo-file-system";
import { 

  compose , 
  withHandlers ,
  withReducer ,
  lifecycle ,
  withState ,
  withProps

} from "recompose";
import { CheckFolder } from "./funcHocApp";

let addInternalData = withState (

  "internalData" ,
  "setInternalData" ,
  []

)

let allDataSell = withState ( 

  "allSells" ,
  "setAllSell" ,
  []

)

let addProps = withProps ({

  PathDoc : documentDirectory + "/DataFolder/folderData.txt"

})

let actionReducer = ( actionApp: string , action: any  ) => {

  switch ( action.type ) {

    case "INITIAL_PAGE":

      return actionApp = "INITIAL_PAGE"

    case "ADD_PAGE":

      return actionApp = "ADD_PAGE"

    case "LOADING_PAGE":

      return actionApp = "LOADING_PAGE"
    
    case "SELLING_PAGE":

      return actionApp = "SELLING_PAGE"

    default:

      return actionApp = "LOADING_PAGE"

  }                        

} 

let addReducer = withReducer (

  "actionApp" ,
  "dispatch" ,
  actionReducer ,
  "LOADING_PAGE"

)

let addHandlers = withHandlers ({

  Initial_Page: ( props: any ) => () => props.dispatch ( { type : "INITIAL_PAGE" } ) ,
  Add_Page: ( props: any ) => () => props.dispatch ( { type : "ADD_PAGE" } ) ,
  Loading_Page: (props: any) => () => props.dispatch ( { type : "LOADING_PAGE" } ) ,
  CheckFolder: (prop:any) => ( someProps: any ) => CheckFolder ( someProps ) ,
  Selling_Page: ( props: any ) => () => props.dispatch ( { type : "SELLING_PAGE" } ) ,

})

let addLyfeCycle = lifecycle ({

  async componentDidMount () {

    let props: any = this.props
    await props.CheckFolder ( props )

  } ,

  shouldComponentUpdate () {

    return true

  }

})

export default compose ( 

  addInternalData ,
  allDataSell ,
  addProps ,
  addReducer ,
  addHandlers ,
  addLyfeCycle

)