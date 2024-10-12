import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const BtnShowStyle = StyleSheet.create({
  
  cont: {

    width: width - width / 10 ,
    paddingLeft: width / 20 ,
    paddingRight: width / 20 ,
    height: width / 10 ,
    borderColor: '#ffffff57' ,
    borderWidth: 1 , 
    borderRadius: 2 ,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',

  } ,

  towf: {

    justifyContent: 'center' ,
    alignItems: "flex-start" ,
    width: width - width / 10 ,


  } ,

  txt: {

    color: "white" ,
    textShadowColor: "black" ,
    textShadowRadius: 1 ,
    

  }

});

export default BtnShowStyle