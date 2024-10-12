import { 

  compose ,
  withState ,
  withHandlers ,
  lifecycle

} from "recompose";

let addState = withState (

  "isInfo" ,
  "setInfo" ,
  false

)

let addHandlers = withHandlers({

  ShowInfo: ( { setInfo }: { setInfo: ( _: boolean ) => void } ) => ( bool: boolean ) => setInfo ( !bool )

})

let addLyfeCycle = lifecycle ({

  shouldComponentUpdate () {

    return true 

  }

})

export default compose (

  addState ,
  addHandlers ,
  addLyfeCycle
  
)