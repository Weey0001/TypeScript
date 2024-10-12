interface DataItemType {

  Id: string ,
  Code_Bar: string ,
  name: string ,
  category: {
    Id: string ,
    Name: string
  } ,
  Prix_Entre: string ,
  numInBoit: string ,
  marge: string ,
  outPrice: string ,
  minInStock: string ,
  TotalInStock: string ,
  valTva: string ,
  Benefices: string ,
  Prix_Reel: string ,
  BeneficesTotal: string ,
  Nombre_Boite: string ,
  multiple: string ,
  tva: string ,
  Ratio: string

}

export type { DataItemType }