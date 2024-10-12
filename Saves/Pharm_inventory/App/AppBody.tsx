import React from "react"
import { compose } from "recompose"
import AddPage from "./components/addPage/addPage"
import InitialPage from "./components/initialPage/initialpage"
import LoadingPage from "./components/loadingPage/loadingPage"
import SellingPage from "./components/sellingPage/selingPage"
import HocApp from "./HocApp/HocApp"
import ContainerApp from "./ownerComp/container/container"

const AppBody = ( props: any ): JSX.Element => 

  <ContainerApp>

    {

      props.actionApp === "INITIAL_PAGE" ?
        <InitialPage { ...props } />
        : props.actionApp === "ADD_PAGE" ?
        <AddPage { ...props } />
        : props.actionApp === "LOADING_PAGE" ?
        <LoadingPage />
        : props.actionApp === "SELLING_PAGE" ? 
        <SellingPage { ...props } />
        : props.Loading_Page ()

    }

  </ContainerApp>

export default compose ( HocApp ) ( AppBody )