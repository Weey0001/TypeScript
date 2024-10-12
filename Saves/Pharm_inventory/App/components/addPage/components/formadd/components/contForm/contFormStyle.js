import {  

  StyleSheet ,
  Dimensions 

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const ContFormStyle = StyleSheet.create({
  
  cont: {

    width: width ,
    height: height / 8 ,
    justifyContent: "space-evenly" ,
    flexDirection: 'row' ,
    alignItems: 'center'
    
  } ,

  small: {

    width: height / 8 - width / 20  ,

  } ,

  big: {

    width: width - height / 8 - width / 20  ,

  } ,

  contTxt: {

    height: height / 8 - width / 20 ,
    backgroundColor: "#7a7a7a63" ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    borderRadius: 10 ,
    elevation: 2 ,
    borderColor: "white" ,
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

export default ContFormStyle