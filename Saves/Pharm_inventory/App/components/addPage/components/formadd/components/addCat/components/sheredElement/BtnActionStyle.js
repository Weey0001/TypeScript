import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const BtnActionStyle = StyleSheet.create({

  small: {

    width: height / 8 - width / 20  ,
    elevation: 2 ,

  } ,

  contTxt: {

    
    height: height / 8 - width / 20 ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    borderRadius: 10 ,
    borderColor: "#ffffff5e" ,
    borderWidth: 1 ,
    elevation: 2

  } ,

  txt: {

    textAlign: "center" ,
    fontWeight: "bold" ,
    color: "white" ,
    textShadowColor: "black" ,
    textShadowRadius: 1

  }

});

export default BtnActionStyle