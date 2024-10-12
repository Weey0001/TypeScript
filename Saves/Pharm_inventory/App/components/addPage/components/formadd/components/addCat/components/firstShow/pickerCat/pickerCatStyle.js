import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const PickerCatStyle = StyleSheet.create({
  
  contPick: {

    width: width - ( ( height / 8 ) * 2 ) - width / 15 ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    backgroundColor: "#000000a1" ,
    color: "#ffffffb3" ,
    borderRadius: width / 10 ,

  } ,

  item: {

    textAlign: "center" ,
    fontSize: width / 20 ,
    
  }

});

export default PickerCatStyle