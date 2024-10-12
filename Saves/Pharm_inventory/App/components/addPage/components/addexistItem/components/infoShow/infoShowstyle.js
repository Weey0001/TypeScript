import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const InfoShowStyle = StyleSheet.create({
  
  txt: {

    textAlign: "center" ,
    fontWeight: "bold" ,
    color: "white" ,
    textShadowColor: "black" ,
    textShadowRadius: 1 ,
    fontSize: width / 15

  }

});

export default InfoShowStyle