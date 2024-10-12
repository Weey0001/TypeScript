import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const StateCompStyle = StyleSheet.create({
  
  cont: {

    width: width , 
    height: height / 8 ,
    justifyContent: 'space-around',
    alignItems: 'center' ,
    flexDirection: 'row'

  } 

});

export default StateCompStyle