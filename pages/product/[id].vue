<script setup>
const route = useRoute()
const { data: product } = await useFetch(`/api/product/${route.params.id}`)
</script>

<template>
<div>
    <head>
        <title>{{ product.name }}</title>
        <Meta name="description" :content="`${product.description}`"/>
    </head>
    <main>
        <div class="flex justify-center items-center w-full p-29">
            <div>
                <h1>{{ product.name }}</h1>
                <Card :product="product"/>
            </div>
            
        </div>
    </main>
    
</div>
</template>

