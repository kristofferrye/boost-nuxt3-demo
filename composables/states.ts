interface Product {
    id: number
    name: string
    description: string
    image: string
    price: number
    sugarfree: Boolean
    allergies: Array<string>
}

interface CartProduct extends Product {
    quantity: number;
}

export const useCart = () => {
    // const cart = useState<Product[]>("", () => [])
    const cart = useState<CartProduct[]>("cart", () => [])

    const addToCart = (product: Product) => {
        const currentProduct = cart.value.find((p) => p.id === product.id);
        if (currentProduct) {
            const newCart = cart.value.filter(p => p.id !== product.id)
            currentProduct.quantity++
            newCart.push(currentProduct)
            cart.value = newCart
            postCart(currentProduct)
        } else {
            const cartProduct: CartProduct = { ...product, quantity: 1 }
            cart.value.push(cartProduct)
            postCart(cartProduct)
        }
        console.log(cart.value)
    }

    const postCart = async (cartProduct) => {
        try {
            await useFetch("/api/cart", { method: "post", body: cartProduct })
        } catch (error) {
            console.log(error)
        }
    }

    /* const deleteFromCart = (product: Product) => {
        cart.value = cart.value.filter(x => x.id !== product.id)
    } */

    return { 
        cart: readonly(cart), 
        addToCart
    }
}