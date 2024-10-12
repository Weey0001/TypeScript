import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const MargeTvaMinInStockStyle = StyleSheet.create({
  
  cont: {

    width: width ,
    height: height / 8 ,
    justifyContent: "space-evenly" ,
    flexDirection: 'row' ,
    alignItems: 'center'
    
  } ,

  small: {

    width: height / 8 - width / 20  ,

  } ,

  big: {

    width: ( width - height /  8 ) / 2 - width / 20  ,

  } ,

  contTxt: {

    
    height: height / 8 - width / 20 ,
    backgroundColor: "#7a7a7a63" ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    borderRadius: 10 ,
    borderColor: "#ffffff5e" ,
    borderWidth: 1 ,
    elevation: 2

  } ,

  txt: {

    textAlign: "center" ,
    fontWeight: "bold" ,
    color: "white" ,
    textShadowColor: "black" ,
    textShadowRadius: 1

  } ,
  
  inpMult: {

    width: (width - height / 8)/2 ,
    height: height / 8 ,
    alignItems: 'center' ,
    justifyContent: 'center'     

  } ,

  inp: {

    textAlign: "center" ,
    fontSize: width / 20 ,
    color: "white" ,
    backgroundColor: "#00000080" ,
    borderRadius: 10 ,
    borderWidth: 1 ,
    borderColor: "#ffffff29" ,
    width: width / 4 + width / 19

  }

});

export default MargeTvaMinInStockStyle