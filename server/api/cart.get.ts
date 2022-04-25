import { readFileSync } from "fs"

export default defineEventHandler(() => {
    const rawdata = readFileSync("server/cart.json")
    const data = JSON.parse(rawdata.toString())

    console.log(data)

    return data
})