import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const ContStyle = StyleSheet.create({
  
  cont: {

    width: width , 
    height: height ,
    justifyContent: 'center' ,
    alignItems: 'center',

  } ,

});

export default ContStyle