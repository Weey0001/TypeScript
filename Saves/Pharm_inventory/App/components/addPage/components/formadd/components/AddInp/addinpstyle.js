import { 

  StyleSheet ,
  Dimensions

} from "react-native"

const { width } = Dimensions.get ( "screen" )

const AddInpNameStyle = StyleSheet.create({

  inpT: {

    textAlign: "center" ,
    fontSize: width / 20 ,
    color: "#ffffff" ,
    backgroundColor: "#000000a3" ,
    borderRadius: 10 ,
    borderWidth: 1 ,
    borderColor: "#ffffff29" ,
    width: width / 3*2

  }

});

export default AddInpNameStyle