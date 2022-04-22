interface Product {
    id: number
    name: string
    description: string
    image: string
}

export const useCart = () => {
    const cart = useState<Product[]>("shoplist", () => [])

    const addToCart = (product: Product) => {
        cart.value.push(product)
        console.log(cart.value)
    }

    /* const deleteFromCart = (product: Product) => {
        cart.value = cart.value.filter(x => x.id !== product.id)
    } */

    return { 
        cart: readonly(cart), 
        addToCart
    }
}