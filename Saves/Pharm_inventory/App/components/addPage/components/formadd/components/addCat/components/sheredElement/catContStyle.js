import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const CatContStyle = StyleSheet.create({

  cont: {

    width: width ,
    height: height / 8 ,
    justifyContent: "space-evenly" ,
    flexDirection: 'row' ,
    alignItems: 'center'
    

  } ,
  big: {

    width: width - ( ( height / 8 ) * 2 ) - width / 20  ,

  } ,
  contTxt: {

    height: height / 8 - width / 20 ,
    backgroundColor: "#7a7a7a63" ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    borderRadius: 10 ,
    borderColor: "#ffffff5e" ,
    borderWidth: 1 ,
    elevation: 2

  } ,

});

export default CatContStyle