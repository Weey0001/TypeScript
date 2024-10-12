import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const BtnCaracStyle = StyleSheet.create({
  
  too: {

    alignItems: 'center' ,
    justifyContent: 'center' ,
    padding: 3 , 
    backgroundColor: "#000000a1" ,
    borderRadius: 30 ,
    width: width / 6 ,
    height: width / 6 ,
    elevation: 2 ,
    borderColor: "#ffffff5e" ,
    borderWidth: 1

  } ,

  contTxt: {

    alignItems: 'center' ,
    justifyContent: 'center',
    padding: 5


  } , 

  txt: {

    color: "#ffffffb5" ,
    fontSize: width / 20

  }

});

export default BtnCaracStyle