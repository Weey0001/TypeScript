import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const SellingPageStyle = StyleSheet.create({
  
  cont: {

    width: width ,
    height: height 

  } ,

  contItemFlat: {

    alignItems: 'center', 
    justifyContent: 'center',

  } ,

  empListcont: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    width: width ,
    height: height

  } ,

  txt: {

    color: "white" ,
    fontSize: width / 10 ,
    textShadowColor: "black" ,
    textShadowRadius: 1

  }

});

export default SellingPageStyle