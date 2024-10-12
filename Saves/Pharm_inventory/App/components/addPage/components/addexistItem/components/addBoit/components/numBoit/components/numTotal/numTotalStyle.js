import {  

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const numTotalStyle = StyleSheet.create({
  
  txt: {

    color: "white" ,
    textShadowColor: "black" ,
    textShadowRadius: 1 ,
    fontSize: width / 25

  }

});

export default numTotalStyle

