import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const FormAddStyle = StyleSheet.create({
  
  cont: { 

    justifyContent: 'center' ,
    alignItems: 'center' , 
    width: width , 
    height: height

  }

});

export default FormAddStyle