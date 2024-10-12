'use strict'

import { ForSommeTypes } from "../../../../../HocInit_page/interfaceInit_page"

export const ForSomme: ForSommeTypes [] = 

  [

    {

      title: "Prix_Entre" ,
      subTitle: "Valeur d'entree" ,
      isPrice: true

    } ,

    {

      title: "Nombre_Boite" ,
      subTitle: "Nombre de boit reel"

    } ,

    {

      title: "minInStock" ,
      subTitle: "Totale de boit tampon"

    } ,

    {

      title: "TotalInStock" ,
      subTitle: "Totale d'unite reel"

    } ,

    {

      title: "BeneficesTotal" ,
      subTitle: "Beneficesice totale du Stock" ,
      isPrice: true

    } ,

    {

      title: "valTotalTva" ,
      subTitle: "Totale TVA a payer pour le stock" ,
      isPrice: true

    }

  ]

export  const ForView: { title: string } [] = 

  [

    {

      title: "Prix_Entre"

    } ,

    {

      title: "Nombre_Boite"} ,

    {

      title: "minInStock"
    
    } ,

    {

      title: "TotalInStock" ,

    } ,

    {

      title: "BeneficesTotal" ,

    } ,

    {

      title: "valTva" ,

    } ,

    {

      title: "Prix_Reel" ,
      
    } ,

    {

      title: "Benefices"

    } ,

    { 

      title: "multiple"

    } ,

    {

      title: "valTotalTva" ,

    } ,

    {

      title: "Ratio" ,

    }

  ].sort (( a , b ) => a.title.localeCompare ( b.title  ))

