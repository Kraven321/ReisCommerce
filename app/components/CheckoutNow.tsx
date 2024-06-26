"use client"

import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";




const CheckoutNow = ({currency,name,description,image,price, price_id}: ProductCart) => {
    const {checkoutSingleItem} = useShoppingCart()
    function buyNow(priceId: string) {
        checkoutSingleItem(priceId)
    }

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    }
  return (
    <Button className="bg-secondary text-black hover:text-white font-semibold" onClick={() => {buyNow(product.price_id)}}>Checkout Now</Button>
  )
}

export default CheckoutNow
