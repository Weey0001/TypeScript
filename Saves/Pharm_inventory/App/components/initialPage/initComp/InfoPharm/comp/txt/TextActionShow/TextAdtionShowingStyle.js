import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height} = Dimensions.get ( "screen" )

const TextActionShowingStyle = StyleSheet.create({

  cont: {

    width: width - width / 10 ,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10 ,


  } ,

  txt: {

    color: "white" ,
    textShadowColor: "black" , 
    textShadowRadius: 1 ,
    flex: 1 ,

  }
  
});

export default TextActionShowingStyle