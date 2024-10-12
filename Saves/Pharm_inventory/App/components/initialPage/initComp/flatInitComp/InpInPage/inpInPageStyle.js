import { StyleSheet, Dimensions } from "react-native";

let { width , height } = Dimensions.get ( "screen" )

const InpInPageStyle = StyleSheet.create({
  
  cont: {

    flexDirection: 'row',
    width: width - width / 10 ,
    marginTop: 5


  } ,

  inp: {
    
    textAlign:"center", 
    flexGrow: 1, 
    color:"#ffffffd9" ,
    backgroundColor: "#00000099" ,
    borderRadius: 10 ,
    borderWidth: 1,
    borderColor: "#ffffff70",
    margin: 5
  
  }

});

export default InpInPageStyle