<script setup>
const emit = defineEmits(["deleted"])
const props = defineProps({
    product: Object
})

const { addToCart } = useCart()

const addToList = () => {
    addToCart(props.product)
}
const deleteProduct = async () => {
    try {
        await useFetch("/api/products", { method: "delete", body: props.product.id })
        emit("deleted")
        console.log(`Deleting product with id: ${props.product.id}`)
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <div class="border shadow-md rounded-lg m-2">
        <div class="flex justify-end ">
            <button><img src="~/assets/svg/x.svg" class="w-6 h-6"/></button>
        </div>
        <div class="p-2">
            <div class="flex justify-center">
                <NuxtLink :to="`/product/${product.id}`">
                    <img class="w-64 h-64 object-cover border" width="300" height="300" :src="product.image" :alt="product.name" loading="lazy">
                </NuxtLink>
            </div>
            <h2 class="my-4 font-semibold">{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <Button @click="addToList" class="w-full mt-4">Add</Button>
            <Button @click="deleteProduct" class="w-full mt-4">Delete</Button>
        </div>
    </div>
</template>

