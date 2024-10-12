import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const BarCodeViewStyle = StyleSheet.create({
  
  cont: {

    width: width , 
    height: height ,
    position: "absolute"

  }

});

export default BarCodeViewStyle