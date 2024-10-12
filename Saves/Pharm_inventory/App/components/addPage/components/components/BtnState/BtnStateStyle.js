import {  

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const BtnStateStyle = StyleSheet.create({

  cont: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    padding: width / 20 ,
    borderRadius: width / 20 ,
    width: width / 2 - width / 20 ,
    borderColor: "#ffffff5e" ,
    borderWidth: 1 ,
    elevation: 2


  } ,

  to: {

    justifyContent: 'center', 
    alignItems: 'center' ,

  } ,

  txt: {

    textAlign: "center" ,
    fontWeight: "bold" ,
    color: "white" ,
    textShadowColor: "black" ,
    textShadowRadius: 1 ,
    fontSize: width / 20

  }

});

export default BtnStateStyle