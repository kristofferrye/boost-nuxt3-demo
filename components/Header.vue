<template>
<header class="flex justify-between items-center h-32 p-8 bg-slate-800 text-white">
    <NuxtLink to="/">
        <span>LOGO</span>
    </NuxtLink>
    <span>Antall: {{ cart.length }}</span>
</header>
</template>

<script setup>
const { cart } = useCart()
</script>