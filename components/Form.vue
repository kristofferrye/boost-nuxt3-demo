<script setup>
const emit = defineEmits(["added, toggleShowModal"])
const formData = ref({})
const submitHandler = async () => {
    const { name, description, image } = formData.value
    const productData = {
        id: `${Math.floor(Math.random() * 10000) + 1000}`, 
        name, 
        description, 
        image
    }
    try {
        await useFetch("/api/products", { method: "post", body: productData })
        emit("added")
        emit("toggleShowModal")
        formData.value = {}
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
<div class="mt-10">
    <form @submit.prevent="submitHandler">
        <div class="mv-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
            <input
                v-model="formData.name"
                class="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                required
            >
        </div>
        <div class="mv-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
            <input
                v-model="formData.description"
                class="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Description"
                required
            >
        </div>
        <div class="mv-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="image">Image</label>
            <input
                v-model="formData.image"
                class="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                id="image"
                type="text"
                placeholder="Exern URL"
                required
            >
        </div>
        <Button type="submit">Legg til</Button>
    </form>
</div>
</template>
