import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const FlatInitCompStyle = StyleSheet.create({

  contflat: {

    alignItems: 'center' ,
    justifyContent: 'center' ,
    

  } ,

  cont: {

    width: width ,
    height: height - width / 6 ,
    backgroundColor: "#00000085" ,
    width: width - width / 20 ,
    height: height - width / 5 * 1.5 ,
    borderColor: "#ffffff85" ,
    borderWidth: 1

  } ,

  contCont: {

    justifyContent: 'center' ,
    alignItems: 'center'

  } ,

  empListcont: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    width: width ,
    height: height

  } ,

  txt: {

    color: "white" ,
    fontSize: width / 10 ,
    textShadowColor: "black" ,
    textShadowRadius: 1

  }

});

export default FlatInitCompStyle