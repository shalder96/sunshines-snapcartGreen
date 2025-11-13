import { createContext, useContext} from "react";

//product context created
export const ProductContext = createContext({
  productName: "Fresh Tomatoes",
})

// product provider
export const ProductProvider = ProductContext.Provider


//created a hook to use products
export default function useProduct() {
  return useContext(ProductContext)
}