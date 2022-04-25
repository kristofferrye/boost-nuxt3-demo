<script setup>
    useHead({
        title: "Cart",
        meta: [{ name: "description", content: "Cart"}]
    })
    const { data: cartData, refresh } = await useFetch("/api/cart")

</script>

<template>
    <div class="flex justify-center">
        <div class="w-1/2 py-4">
        <p>{{ cartData?.totalAmount }}</p>
            <h3 class="flex justify-center text-4xl">Total amount: {{ cartData?.totalAmount }} kr</h3>
            <div v-for="(product, index) in cartData?.products" :key="index" class="border-b my-2">
                <div class="flex justify-between">
                    <div class="flex">
                        <a :href="`/product/${product.id}`"><img class="w-36 h-36 object-cover" :src="product.image" :alt="product.name" loading="lazy"></a>
                        <div class="flex flex-col justify-center ">
                            <h3>{{ product.name }}</h3>
                            <p>{{ product.description }}</p>
                        </div>
                    </div>
                    
                    <div class="flex flex-col justify-center">
                        <h3 class="flex justify-center text-lg">Quantity</h3>
                        <div class="flex justify-center items-center">
                            <button class="rounded-full text-lg hover:animate-spin"><img src="~/assets/svg/minus-circle.svg" class="w-10 "/></button>
                            <h3 class="text-3xl mx-8">{{ product.quantity }}</h3>
                            <button class="rounded-full text-lg hover:animate-spin"><img src="~/assets/svg/plus-circle.svg" class="w-10 "/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>