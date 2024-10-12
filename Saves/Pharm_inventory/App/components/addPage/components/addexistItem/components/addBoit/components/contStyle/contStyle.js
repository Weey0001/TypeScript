import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const ContStyle = StyleSheet.create({
  
  cont: {

    justifyContent: "space-evenly" ,
    alignItems: 'center' ,
    flexDirection: 'row' ,
    height: height / 8

  }

});

export default ContStyle