import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const PickerCaracStyle = StyleSheet.create({

  cont: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    position: 'absolute' ,
    bottom : width / 4 ,
    right: width / 25 ,
    flexDirection: 'row' ,

  } ,

});


export default PickerCaracStyle