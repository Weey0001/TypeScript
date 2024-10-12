import { StyleSheet , Dimensions } from "react-native";

const { width } = Dimensions.get ( "screen" )

const SellBtnStyle = StyleSheet.create({
  
  too: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    padding: 3 , 
    position: 'absolute' ,
    backgroundColor: "#4e3082c9" ,
    bottom : width / 4,
    left: width / 25 ,
    borderRadius: 30 ,
    width: width / 6 ,
    height: width / 6 ,
    elevation: 2 ,
    borderWidth: 1 ,
    borderColor: "#ffffff5e" ,


  } ,
  
  contTxt: {

    width: width / 6 ,
    height: width / 6 ,
    alignItems: 'center' ,
    justifyContent: 'center' ,

  } ,

  txt: {

    color: "#ffffffd6" ,
    textShadowColor: "#000000cf" ,
    textShadowRadius: 2 ,
    fontSize: width / 20

  }

});

export default SellBtnStyle