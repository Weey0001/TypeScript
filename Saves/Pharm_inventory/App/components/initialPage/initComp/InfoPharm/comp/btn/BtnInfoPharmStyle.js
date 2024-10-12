import react from 'react';
import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const BtnInfoPharmStyle = StyleSheet.create({

  contTxt: {

    width: width - width / 10 ,
    height: height / 15 ,
    backgroundColor: "#068bbc" ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    margin: 5 ,
    borderRadius: 10 ,
    borderWidth: 1 ,
    borderColor: "#ffffff69"

  } ,

  txt: {

    textAlign: "center" ,
    color: "#ffffff" , 
    textShadowColor: "#000000" ,
    textShadowRadius: 1

  }

});

export default BtnInfoPharmStyle