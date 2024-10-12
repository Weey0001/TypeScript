import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const LoadPageStyle = StyleSheet.create({

  cont: {

    width: width ,
    height: height ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    backgroundColor: "blue"

  }

});

export default LoadPageStyle