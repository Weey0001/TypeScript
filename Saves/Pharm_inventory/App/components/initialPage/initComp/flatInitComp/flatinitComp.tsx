import React from "react";
import { 

  FlatList ,
  View , 
  Text

} from "react-native";
import FlatInitCompStyle from "./flatinitcompStyle";
import hocflComp from "./hocflcomp/hocflComp";
import { compose } from "recompose";
import ItemComp from "./itemComp/itemComp";
import { DataItemType } from "./itemComp/interfaceItemComp";
import InpCompIn_Page from "./InpInPage/inpInPage";
import AllItemBtn from "./allBtn/allItems/allItems";
import AddInitBtn from "../addinitBtn/addInitBtn";
import PickerCaracComp from "./PickerCaracComp/pickerCaracComp";
import SellBtn from "./allBtn/sellBtn/sellBtn";

const FlatInitComp = ( props: any ): JSX.Element => 

  <View style = { FlatInitCompStyle.contflat } >
    <InpCompIn_Page { ...props } />
    <FlatList

      data = { props.filtredData }
      style = { FlatInitCompStyle.cont }
      contentContainerStyle = { FlatInitCompStyle.contCont }
      keyExtractor = { ( item: DataItemType ): string => item.Id }

      renderItem = { 

        ({ item , index }: { item: DataItemType , index: number }) => 

          <ItemComp 

            dataItem = { item }  
            { ...props }
            index = { index }

          />

      }

      ListEmptyComponent = { 

        (): JSX.Element => 

          <View style = { FlatInitCompStyle.empListcont }>
            <Text style = { FlatInitCompStyle.txt }>
              Vide
            </Text>
          </View> 

      }

    />

    <AllItemBtn { ...props } />
    <AddInitBtn BtnAction = { props.Add_Page } />
    <PickerCaracComp { ...props } />
    <SellBtn title = "Selled" BtnAction = { props.Selling_Page } />

  </View>



export default compose ( hocflComp ) ( FlatInitComp )