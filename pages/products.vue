<script setup>
    useHead({
        title: "PLP",
        meta: [{ name: "description", content: "PLP"}]
    })
    const { data: products, refresh } = await useFetch("/api/products")
    const showModal = ref(false)
    const toggleShowModal = () => showModal.value = !showModal.value
</script>

<template>
    <Modal :visible="showModal" @close="toggleShowModal" :title="'Add new product'" :description="'Fill in the form to add the new product'">
        <Form @added="refresh" @close="toggleShowModal"/>
    </Modal>
    <main>
        <div class="flex justify-center items-center py-4">
            <h1 class="text-4xl tracking-tight sm:text-5xl md:text-6xl text-lime-500 font-thin pb-4 mr-6">Monster Store</h1>
            <button @click="toggleShowModal" class="flex bg-black hover:bg-lime-500 pl-1 pr-4 items-center rounded-lg h-12">
                <img src="~/assets/svg/plus.svg" class="w-10 "/><div class="flex justify-center items-center  "><p class="text-white ">New Product</p></div>
            </button>
        </div>
        <div class="flex flex-wrap justify-center md:px-32">
            <Card v-for="(product, index) in products" :key="index" :product="product" @deleted="refresh"/>
        </div>
    </main>
</template>