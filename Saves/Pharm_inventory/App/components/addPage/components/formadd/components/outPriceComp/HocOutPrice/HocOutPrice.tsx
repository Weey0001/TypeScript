import { 

  compose ,
  lifecycle

} from "recompose";

let addLyfeCycle = lifecycle ({

  shouldComponentUpdate () {

    return true

  }

})

export default compose (

  addLyfeCycle

)