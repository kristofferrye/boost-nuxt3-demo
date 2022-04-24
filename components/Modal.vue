<script setup>
    const emit = defineEmits(["added, close"])
    const props = defineProps({
        visible: Boolean,
        title: String,
        description: String
    })
    const added = () => emit("added")
    const close = () => emit("close")
</script>

<template>

<div v-show="visible" class="absolute h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
    <div class="absolute inset-0" @click="close"></div>
    <div class="p-6 bg-white text-black rounded-lg shadow-xl z-50">
        <div class="flex items-center justify-between">
            <h3 class="text-2xl">{{ title }}</h3><button @click="close"><img src="~/assets/svg/x.svg" class="w-8 h-8"/></button>
        </div>
        <p class="mb-4 text-sm">{{ description }}</p>
        <slot @added="added" @close="close"/>
    </div>
</div>
</template>