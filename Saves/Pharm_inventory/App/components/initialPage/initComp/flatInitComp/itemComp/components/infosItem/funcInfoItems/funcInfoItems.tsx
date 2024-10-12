export const OnCheckStock = ( props: string ): string => 

  {

    let ratio: number = parseFloat ( props )

    return ratio > 1 ? 
      "#21732cdb"
      : ( ratio > 0.5 && ratio <= 1 ) ?
      "#4e92caad" 
      : ratio <= 0.5 ?
      "#c96464ab"
      : '#1b13134d'

  }