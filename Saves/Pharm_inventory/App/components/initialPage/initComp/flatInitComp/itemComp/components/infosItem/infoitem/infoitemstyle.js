import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const InfoItemStyle = StyleSheet.create({
  
  cont: {

    width: width - width / 10 ,
    flexDirection: 'row' ,
    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  txt: {

    textAlign: "center" ,
    color: "#ffffff" ,
    textShadowColor: "black" ,
    textShadowRadius: 1

  }
});

export default InfoItemStyle