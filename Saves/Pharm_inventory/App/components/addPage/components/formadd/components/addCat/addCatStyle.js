import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const AddCatStyle = StyleSheet.create({

  cont: {

    height: height / 8 ,
    width: width ,
    justifyContent: 'center' ,

  }

});

export default AddCatStyle