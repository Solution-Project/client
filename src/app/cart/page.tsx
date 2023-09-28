import ProductList from "@/components/productList"
import React from "react"

const Cart = () => {
  return (
    <main className="[&>*]:font-bold">
      <h1 className="text-xl">Cart</h1>
      <ProductList />
    </main>
  )
}

export default Cart