<script setup>
    const { cart } = useCart()

    const { data: cartData, refresh } = await useFetch("/api/cart")
    const initCartState = cartData.value.products.length

    /* const cartCount = computed(() => {
        let count = 0
        cart.value.forEach(cartProduct => count += cartProduct.quantity)
        return count
    }) */
    const cartCount = computed(() => cart.value.reduce((total, cartProduct) => total += cartProduct.quantity, 0)) 

</script>

<template>
<header class="flex justify-between items-center h-24 bg-black text-white">
    <div class="flex items-center h-full">
        <!-- <NuxtLink to="/"><span><img src="~/assets/images/monster_logo.jpg" class="w-24 h-12"/></span></NuxtLink> -->
        <a href="/"><span><img src="~/assets/images/monster_logo.jpg" class="w-24 h-12 "/></span></a>
    </div>
    <NuxtLink to="/cart" class="hover:bg-lime-500 rounded-md mr-8 p-4">
        <div class="flex justify-between space-x-2 mr-6">
            <img src="~/assets/svg/shopping-cart.svg" class="w-10 " :class="[ initCartState + cartCount > 0 ? 'animate-bounce' : '']"/>
            <!-- <div class="flex justify-center items-center "><p class="text-white">Antall: {{ cart.length }}</p></div> -->
            <div class="flex justify-center items-center "><p class="text-white">Antall: {{ initCartState + cartCount }}</p></div>
        </div>
    </NuxtLink>
</header>
</template>