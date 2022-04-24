<script setup>
const emit = defineEmits(["added, close"])
// const formData = ref({})
const formData = ref({
  name: '',
  description: '',
  image: 'https://static.partyking.org/fit-in/1300x0/products/original/monster-energy-drink-3.jpg',
})
const handleSubmit = async () => {
    const { name, description, image } = formData.value
    const productData = { id: `${Math.floor(Math.random() * 10000) + 1000}`, name, description, image }
    try {
        await useFetch("/api/products", { method: "post", body: productData })
        emit("added")
        emit("close")
        formData.value = {}
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
<div class="mt-8 w-96 ">
    <FormKit type="form" v-model="formData" @submit="handleSubmit" :config="{ classes: { outer: 'my-5', label: 'block mb-1 font-bold text-sm', input: 'text-gray-800 mb-1 w-full border border-gray-400 py-1 px-2 rounded-md', help: 'text-xs text-gray-500', message: 'text-red-500 text-xs', submit: 'bg-green-500 rounded', section: 'bg-green-500 rounded' }, }">
        <FormKit type="text" label="Product Name" name="name" placeholder="Your name" validation="required"/>
        <FormKit type="text" label="Product Description" name="description" placeholder="Description" validation="required"/>
        <FormKit type="text" label="Image" name="image" placeholder="Image URL" validation="required"/>
        <FormKit type="select" label="Favorite Food" name="favorite_food" placeholder="Choose a food" :options="['Pizza', 'Ice Cream', 'Burger']"/>
        <FormKit type="checkbox" label="Favorite Food" name="sugarfree"  :options="['Sugar free',]"/>
        <FormKit type="textarea" name="instructions" label="Special Instructions" placeholder="Allergies? No-contact delivery? Let us know." validation="length:0,120" validation-visibility="live" :validation-messages="{ length: 'Instructions cannot be more than 120 characters.', }"/>
    </FormKit>
</div>
</template>
