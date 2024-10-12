import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const AddPageStyle = StyleSheet.create ({

  cont: {

    width: width ,
    height: height ,

  }

})

export default AddPageStyle