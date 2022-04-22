<template>
<div>
    <head>
        <title>{{ product.name }}</title>
        <Meta name="description" :content="`${product.description}`"/>
    </head>
    <h1>{{ product.name }}</h1>
    <Card :product="product"/>
</div>
</template>

<script setup>
const route = useRoute()

const { data: product } = await useFetch(`/api/product/${route.params.id}`)

</script>