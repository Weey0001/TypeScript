import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const AddInitBtnStyle = StyleSheet.create ({

  cont: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    padding: 3 , 
    position: 'absolute' ,
    backgroundColor: "#548514d6" ,
    bottom : width / 30 ,
    left: width / 25 ,
    borderRadius: 30 ,
    width: width / 6 ,
    height: width / 6 ,
    elevation: 2 ,
    borderColor: "#ffffff5e" ,
    borderWidth: 1
    
  } ,

  contTxt: {

    alignItems: 'center' ,
    justifyContent: 'center' ,

  } ,

  txt: {

    color: "#ffffffd6" ,
    textShadowColor: "#000000cf" ,
    textShadowRadius: 2 ,
    fontSize: width / 12

  }

})

export default AddInitBtnStyle