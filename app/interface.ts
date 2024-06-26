
export interface simplifiedProduct {
    _id: string,
    imageUrl: string,
    price: number,
    slug: string,
    categoryName: string,
    name: string
};


export interface fullProduct {
    _id: string,
    name: string,
    description: string,
    price: number,
    slug: string,
    categoryName: string,
    images: any,
    price_id: string
}


