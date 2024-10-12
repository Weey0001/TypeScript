import React from "react";
import AddFrom from "./components/formadd/formadd";
import { compose } from "recompose";
import HocAddPage from "./HocAddPage/HocAddPage";
import BarCodeView from "./components/BarCodeView/BarCodeView";
import AddItem from "./components/addexistItem/addItem";
import LoadingPage from "../loadingPage/loadingPage";

const AddPage = ( props: any ): JSX.Element => 

  props.actionAddPage === "BarCodeViewer" ?
    <BarCodeView { ...props } />
    : props.actionAddPage === "AddForm" ?
    <AddFrom { ...props } />
    : props.actionAddPage === "AddItem" ?
    <AddItem { ...props } />
    : props.actionAddPage === "LoadingPage" ?
    <LoadingPage />

    :<LoadingPage />

export default compose ( HocAddPage ) ( AddPage )