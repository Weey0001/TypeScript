import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const InpNombre_BoitesStyle = StyleSheet.create ({
  
  inpS: { 

    textAlign: "center" , 
    color: "white" ,
    backgroundColor: "#000000a3" ,
    borderRadius: 10 ,
    borderWidth: 1 ,
    borderColor: "#ffffff29" ,
    width: height / 8 - width / 10

  } ,

  txt: {

    textAlign: "center" ,
    fontWeight: "bold" ,
    color: "white" ,
    textShadowColor: "black" ,
    textShadowRadius: 1

  }

});

export default InpNombre_BoitesStyle