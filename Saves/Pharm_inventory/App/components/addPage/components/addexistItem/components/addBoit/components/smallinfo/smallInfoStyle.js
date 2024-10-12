import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const SmallInfoStyle = StyleSheet.create({
  
  small: {

    width: height / 8 - width / 20  ,

  } ,
  contTxt: {

    
    height: height / 8 - width / 20 ,
    backgroundColor: "#7a7a7a63" ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    borderRadius: 10 ,
    borderWidth: 1 ,
    borderColor: "#ffffff5e" ,
    elevation: 2

  } , 
  txt: {

    textAlign: "center" ,
    fontWeight: "normal" ,
    color: "white" ,
    textShadowColor: "black" ,
    textShadowRadius: 1 ,
    fontSize: width / 25

  } ,

  txt1: {

    textAlign: "center" ,
    fontWeight: "normal" ,
    color: "white" ,
    textShadowColor: "black" ,
    textShadowRadius: 1

  }

});

export default SmallInfoStyle