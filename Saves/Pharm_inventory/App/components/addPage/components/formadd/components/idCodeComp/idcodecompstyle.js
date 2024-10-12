import { 
  
  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const IdCodeCompStyle = StyleSheet.create({
  
  txt: {

    textAlign: "center" ,
    
    color: "white" ,
    textShadowColor: "black" ,
    textShadowRadius: 1 ,
    fontSize: width / 15

  }

});

export default IdCodeCompStyle