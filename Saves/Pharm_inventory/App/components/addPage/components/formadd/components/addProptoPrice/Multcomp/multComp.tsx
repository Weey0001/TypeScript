import React, { forwardRef } from "react";
import { View , Switch , TextInput , Text, Keyboard } from "react-native";
import MultCompStyle from "./multCompStyle";

const MultComp = forwardRef ( ( 
  { 
    
    isMultiple , 
    setMultiple , 
    numInBoit , 
    setNumInBoit ,
    Nombre_Boite ,
    setNombre_Boite ,
    onMultActiv ,
    onEndEditing
  
  } : {

    isMultiple: boolean ,
    setMultiple: ( _: boolean ) => Promise<void> ,
    numInBoit: string ,
    setNumInBoit: ( _: string ) => Promise<void> ,
    Nombre_Boite: string ,
    setNombre_Boite: ( _: string ) => Promise<void> ,
    onMultActiv: () => Promise<void> ,
    onEndEditing: () => void 


  } , {
    
    numInBoitRef ,
    Nombre_BoitesRef

  }: any


): JSX.Element => 

  <View style = { MultCompStyle.cont }>

    <View style = {{

      ... MultCompStyle.small ,
      ... MultCompStyle.contTxt ,
      backgroundColor: isMultiple ? "#17783f8c" : "#7a7a7a63"
    }} >

      <Switch
              
        value = { isMultiple }
        onValueChange = { 
        
          async bool => 
            { 
            
              await setMultiple ( bool ) 
              isMultiple ? null : await onMultActiv ()
            
            } 
        
        }

      />

      <Text style = { MultCompStyle.txt }>
        x Unites
      </Text>

    </View>

  {

    isMultiple ?
      
      <View style = {{

        ... MultCompStyle.big ,
        ... MultCompStyle.contTxt

      }}>

          <TextInput 

            value = { numInBoit } 
            placeholder = "nomber" 
            onChangeText = { txt => setNumInBoit ( txt ) } 
            style = { MultCompStyle.inp }
            keyboardType = "decimal-pad"
            ref = { numInBoitRef }
            onEndEditing = { _ => Keyboard
            .dismiss () }
            placeholderTextColor = "#ffffffa6"

          />
          <Text style = { MultCompStyle.txt }>
            Num in boit
          </Text>
        </View>

        : <View style = { {

          ... MultCompStyle.big ,
          ... MultCompStyle.contTxt

        }} >
            <Text style = { MultCompStyle.txt }>
              Caracteristique prix
            </Text>          
          </View> 

    }

    <View style = {{

      ... MultCompStyle.big ,
      ... MultCompStyle.contTxt 

      }}>

      <TextInput 

        value = { Nombre_Boite } 
        placeholder = "nombre" 
        onChangeText = { txt => setNombre_Boite ( txt ) } 
        style = { MultCompStyle.inp }
        keyboardType = "decimal-pad"
        placeholderTextColor = "#ffffff52"
        ref = { Nombre_BoitesRef }
        onEndEditing = { _ => onEndEditing () }

      />

      <Text style = { MultCompStyle.txt } >
        Nbre de boites
      </Text>

    </View>

  </View>

)

export default MultComp