import { 

  compose ,
  lifecycle ,
  withState ,
  withHandlers ,
  withReducer

} from "recompose";
import { AddNewCat, GetAllCat, RemvCat } from "./funcAddCat";

let addAllCat = withState (

  "allCat" ,
  "setAllCat" ,
  []

)

let addNewCat = withState (

  "newCat" ,
  "setNewCat" ,
  "" 

)

let actionReducer = ( actionCat: string , action: any ): string => 

  {
    switch ( action.type ) {

      case "First_Show":
        return actionCat = "first_show"

      case "Second_show":
        return actionCat = "second_show"
  
      default:
        return actionCat = "first_show"

  }

}

let addReducer = withReducer (

  "actionCat" ,
  "dispatch" ,
  actionReducer ,
  "first_show"

)

let addHandlers = withHandlers({
    
  FirstShow: ( props: any ) => () => props.dispatch ( { type: "First_Show" } ) ,
  SecondShow: ( props: any ) => () => props.dispatch ( { type: "Second_show" } ) ,
  AddNewCat: ( _: any ) => ( props: any ) => AddNewCat ( props ) ,
  RemvCat: ( _: any ) => ( props: any ) => RemvCat ( props ) ,
  SetNewCat: ( props: any ) => ( txt: string ) => props.setNewCat ( txt ) ,
  PickerCat: ( props: any ) => ( propCat: any ) => 
  props.setCategory ( propCat ) ,


})

let addLifeCycle = lifecycle ({

  async componentDidMount () {

    await GetAllCat ( this.props )

  } ,

  shouldComponentUpdate () {

    return true

  }

})

export default compose ( 

  addAllCat ,
  addNewCat ,
  addReducer ,
  addHandlers ,
  addLifeCycle

)