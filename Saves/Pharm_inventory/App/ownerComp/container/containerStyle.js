import { 

  StyleSheet , 
  Dimensions 

} from "react-native";

let { width , height } = Dimensions.get ( "screen" )

const ContStyle = StyleSheet.create({
    
    container : {

        justifyContent: 'center' ,
        alignItems: 'center' ,
        width: width ,
        height: height ,
        backgroundColor: "#00000087"

    }
});

export default ContStyle