import { 

  compose ,
  lifecycle,
  withState ,

} from "recompose";
import { AllSelledItems } from "./FuncHocSellingPage";



let addLifeCycle = lifecycle ({

  async componentDidMount ()

    {
      await AllSelledItems ( this.props )
    } ,

  shouldComponentUpdate ()

    {

      return true

    }

})


export default compose (

  addLifeCycle

)