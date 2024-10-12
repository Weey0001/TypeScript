import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get ( "screen" ) 

const PickerCaracStyle = StyleSheet.create({

  cont:{

    borderWidth: 1 ,
    borderColor: "#ffffff5e" ,
    borderRadius: width / 10 ,    
    backgroundColor: "#000000a1" , 
    marginRight: width / 50

  } ,
  
  contPick: {

    width: width - ( ( height / 8 ) * 2 ) - width / 15 ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    color: "#ffffffb3" 

  } ,

  item: {

    textAlign: "center" ,
    fontSize: width / 20 ,
    
  }

});

export default PickerCaracStyle