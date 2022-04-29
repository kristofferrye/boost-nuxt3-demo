<script setup>
const emit = defineEmits(["deleted"])
const props = defineProps({
    product: Object
})

const { addToCart } = useCart()

const addToList = () => { addToCart(props.product) }

const deleteProduct = async () => {
    try {
        // await useFetch("/api/products", { method: "delete", body: props.product.id })
        await useFetch(`https://monster-store.herokuapp.com/food-items/${props.product.id}`, { method: "delete"})
        emit("deleted")
        console.log(`Deleting product with id: ${props.product.id}`)
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <div class="border shadow-md rounded-lg m-2 w-full md:w-60">
        <div class="flex justify-end"><button @click="deleteProduct" title="Delete"><img src="~/assets/svg/x.svg" class="w-6 h-6"/></button></div>
        <div class="pt-1 pb-4 px-4">
            <div class="flex justify-center">
                <!-- <NuxtLink :to="`/product/${product.id}`"><img class="w-64 h-64 object-cover" :src="product.image" :alt="product.name" loading="lazy"></NuxtLink> -->
                <a :href="`/product/${product.id}`"><img class="w-64 h-64 object-cover" :src="product.image" :alt="product.name" loading="lazy"></a>
            </div>
            <div class="h-28 px-2 ">
                <h2 class="my-4 font-semibold flex justify-center">{{ product.name }}</h2>
                <p class="flex flex-wrap justify-center">{{ product.description }}</p>
            </div>
            <p class="flex flex-wrap justify-center text-3xl">{{ product.price }} kr</p>
            <Button @click="addToList" class="w-full mt-4">Add</Button>
        </div>
    </div>
</template>

