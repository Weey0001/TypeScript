interface CatType {

  Id: string | number ,
  Name: string

}

interface CatFuncProps {

  setAllCat: ( _: CatType[] ) => Promise<void> ,
  allCat: CatType [] ,
  newCat: string ,
  category: CatType ,
  FirstShow: () => Promise<void>

}

export type {

  CatType ,
  CatFuncProps

}