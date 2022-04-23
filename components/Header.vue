<template>
<header class="flex justify-between items-center h-24 bg-black text-white border border-green-400">
    <Modal :visible="showModal" @close="toggleShowModal" :title="'Add new product'" :description="'Fill in the form to add the new product'">
        <Form @added="refresh" @close="toggleShowModal"/>
    </Modal>
    <div class="flex items-center h-full">
        <NuxtLink to="/">
            <span><img src="~/assets/images/monster_logo.jpg" class="w-24 h-12"/></span>
        </NuxtLink>
    </div>
    <div class="flex justify-between space-x-10 mr-4 ">
        <button @click="toggleShowModal">
            <div class="flex  hover:bg-green-500 px-4 items-center rounded-md">
                <img src="~/assets/svg/plus.svg" class="w-10"/>
                <div class="flex justify-center items-center ">
                    <p class="text-white">Add</p>
                </div>
            </div>
        </button>
        <NuxtLink to="/" class="hover:bg-green-500 rounded-md">
            <div class="flex justify-between space-x-2 mr-6">
                <img src="~/assets/svg/shopping-cart.svg" class="w-10 "/>
                <div class="flex justify-center items-center ">
                    <p class="text-white">Antall: {{ cart.length }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</header>
</template>

<script setup>
const showModal = ref(true)
const toggleShowModal = () => showModal.value = !showModal.value

const { cart } = useCart()
// const emit = defineEmits(["open-add-modal"])
// const openAddModal = () => emit("open-add-modal")
</script>