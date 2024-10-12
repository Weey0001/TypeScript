import { 

  StyleSheet , 
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const InpCatNewStyle = StyleSheet.create({

  cont: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    flexGrow: 1
  } ,

  inp: {

    color: "white" ,
    textAlign: "center" ,
    fontSize: width / 20 ,
    backgroundColor: "#000000a3" ,
    borderRadius: 10 ,
    borderWidth: 1 ,
    borderColor: "#ffffff29" ,
    width: width / 2 - width / 20


  }

});

export default InpCatNewStyle