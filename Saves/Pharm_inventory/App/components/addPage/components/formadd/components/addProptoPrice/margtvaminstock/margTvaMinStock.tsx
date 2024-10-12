import React, { forwardRef } from "react";
import { View , Switch , TextInput , Text, Keyboard } from "react-native";
import MargeTvaMinInStockStyle from "./MTMinSStyle";

const MargeTvaMinInStock = forwardRef (( 
  { 
    
    isTva ,
    setTva ,
    marge ,
    setMarge ,
    minInStock ,
    setMinInStock ,
    onEndEditingMarge 
    
  }: {

    isTva: boolean ,
    setTva: ( _: boolean ) => void ,
    marge: string ,
    setMarge: ( _: string ) => void ,
    minInStock: string ,
    setMinInStock: ( _: string ) => void ,
    onEndEditingMarge: () => void

  } ,
  
  {

    margeRef ,
    minInStockRef

  }: any

): JSX.Element => 

  <View style = { MargeTvaMinInStockStyle.cont }>

    <View style = {{

      ... MargeTvaMinInStockStyle.small ,
      ... MargeTvaMinInStockStyle.contTxt ,
      backgroundColor: isTva ? "#c4b040" : "#7a7a7a63"

    }} >

      <Switch
        
        value = { isTva }
        onValueChange = { bool => setTva ( bool ) }

      />

      <Text style = { MargeTvaMinInStockStyle.txt } >
        Tva
      </Text>

    </View>

    <View style = {{

      ... MargeTvaMinInStockStyle.big ,
      ... MargeTvaMinInStockStyle.contTxt

    }}>

      <TextInput 

        value = { marge } 
        placeholder = "nombre" 
        onChangeText = { txt => setMarge ( txt ) } 
        style = { MargeTvaMinInStockStyle.inp }
        placeholderTextColor = "#ffffff52"
        keyboardType = "decimal-pad"
        ref = { margeRef }
        onEndEditing = { _ => onEndEditingMarge () }

      />
      <Text style = { MargeTvaMinInStockStyle.txt } >
        Marge
      </Text>
    </View>


    <View style = {{

      ... MargeTvaMinInStockStyle.big ,
      ... MargeTvaMinInStockStyle.contTxt

    }}>

      <TextInput 

        value = { minInStock } 
        placeholder = "nombre" 
        onChangeText = { txt => setMinInStock ( txt ) } 
        style = { MargeTvaMinInStockStyle.inp }
        placeholderTextColor = "#ffffff52"
        keyboardType = "decimal-pad"
        ref = { minInStockRef }
        onEndEditing = { _ => Keyboard.dismiss () }

      />
      <Text style = { MargeTvaMinInStockStyle.txt } >
        Minimum en Stock
      </Text>

    </View>

  </View>
)

export default MargeTvaMinInStock