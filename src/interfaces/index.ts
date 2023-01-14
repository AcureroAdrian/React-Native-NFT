export interface NFTDataInterface { 
    id: string
    name: string
    creator: string
    price: number
    description: string
    image: any
    bids: {
      id: string
      name: string
      price: number
      image: string
      date: string
    }[]
  }