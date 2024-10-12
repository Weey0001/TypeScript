import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const BtntofsStyle = StyleSheet.create({

  small: {

    width: height / 8 - width / 20  ,

  } ,

  contTxt: {

    
    height: height / 8 - width / 20 ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    borderRadius: width / 20 ,
    backgroundColor: "#000000cc" ,
    borderColor: "#ffffff2e" ,
    borderWidth: 3

  } ,

  txt: {

    textAlign: "center" ,
    color: "#ffffffad" ,
    textShadowColor: "black" ,
    textShadowRadius: 1 ,
    fontSize: width / 15

  } ,

  to: {

    position: "absolute" ,
    bottom: width / 20 ,
    left: width / 20

  }

});

export default BtntofsStyle