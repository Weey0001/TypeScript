import React from "react";
import { View , FlatList , Text } from "react-native";
import { compose } from "recompose";
import SellBtn from "../initialPage/initComp/flatInitComp/allBtn/sellBtn/sellBtn";
import HocSellingPage from "./HocSellingPage/HocSellingPage";
import SellingPageStyle from "./sellingPageStyle";


const SellingPage = ( props: any ): JSX.Element => 

  <View style = { SellingPageStyle.cont }>

    <FlatList
    
      data = { props.allSells }
      style = { SellingPageStyle.cont }
      contentContainerStyle = { SellingPageStyle.contItemFlat }
      keyExtractor = { ( item , index ) => `${index}` }
      renderItem = { ( { item , index } ) => 
    
        <View>
          <Text>

            {JSON.stringify(item._W)}

          </Text>
        </View>
      }

      ListEmptyComponent = { 

        (): JSX.Element => 

          <View style = { SellingPageStyle.empListcont }>
            <Text style = { SellingPageStyle.txt }>
              Vide
            </Text>
          </View>

      }

    />

    <SellBtn 

      title = "Init" 
      BtnAction = { props.Initial_Page } 

    />


  </View>

export default compose ( HocSellingPage ) ( SellingPage )