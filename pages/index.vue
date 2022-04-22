<script setup>
const { data: products, refresh } = await useFetch("/api/products")

useHead({
    title: "Startsiden",
    meta: [{ name: "description", content: "my site"}]
})
</script>

<template>
<main>
    <div class="grid grid-cols-4 gap-4">
        <Card v-for="(product, index) in products" :key="index" :product="product" @deleted="refresh"/>
    </div>
    <Form @added="refresh"/>
</main>
</template>

