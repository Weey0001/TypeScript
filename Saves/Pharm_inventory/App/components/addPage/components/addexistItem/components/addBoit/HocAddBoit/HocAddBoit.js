import { 
  
  compose ,
  lifecycle

} from "recompose";

let addLifeCycle = lifecycle ({

  shouldComponentUpdate () 

    {

      return true

    }

})

export default compose (

  addLifeCycle 

)