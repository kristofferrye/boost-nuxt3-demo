import { readFileSync, writeFileSync } from "fs"

export default defineEventHandler(async (event) => {
    const product = await useBody(event)

    const rawdata = readFileSync("server/cart.json")
    const cart = JSON.parse(rawdata.toString())

    const existstingProduct = cart.products.find(x => x.id === product.id)
    if (existstingProduct) {
        existstingProduct.quantity++
    } else {
        cart.products.push(product)
    }
    cart.totalAmount += product.price
    console.log(cart)

    writeFileSync("server/cart.json", JSON.stringify(cart))
    return "Product successfully created";
})