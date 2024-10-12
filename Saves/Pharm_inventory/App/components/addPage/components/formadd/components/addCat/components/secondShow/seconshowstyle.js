import {  

  StyleSheet ,
  Dimensions 

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const SecondShowStyle = StyleSheet.create({
  
  cont: {

    width: width ,
    height: height / 8 ,
    flexDirection: 'row'

  }

});

export default SecondShowStyle