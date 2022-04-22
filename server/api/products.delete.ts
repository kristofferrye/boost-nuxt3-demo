import { readFileSync, writeFileSync } from "fs"

export default defineEventHandler(async (event) => {
    const productId = await useBody(event)

    const rawdata = readFileSync("server/products.json")
    const products = JSON.parse(rawdata.toString()).filter(x => x.id !== productId)
    console.log(products.filter(x => x.id !== productId))

    writeFileSync("server/products.json", JSON.stringify(products))
})