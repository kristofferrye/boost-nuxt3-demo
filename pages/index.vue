<script setup>
useHead({
    title: "Startsiden",
    meta: [{ name: "description", content: "my site"}]
})

definePageMeta({
    middleware: "logger"
})
</script>
<template>
    <main>
        <div class="md:flex md:flex-row-reverse lg:px-48">
            <div class="flex justify-center items-center md:w-1/2">
                <img src="~/assets/images/monster12x500.jpg" alt="">
            </div>
            <div class="flex justify-start items-center md:w-1/2">
                <div class="sm:text-center lg:text-left">
                    <h1 class="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-thin ">All you need is</h1>
                    <h1 class="text-4xl tracking-tight sm:text-5xl md:text-6xl text-lime-500 font-thin">Monster</h1>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-mono">With a monster energy drink, you feel better immediately. Try one today! Buy some energy so you can get on with your life!</p>
                    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div class="rounded-md shadow animate-pulse">
                            <a href="/products" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-lime-600 md:py-4 md:text-lg md:px-10">Buy Monster</a>
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3 ">
                            <a href="/cart" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-500 hover:bg-lime-700 md:py-4 md:text-lg md:px-10">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center items-center bg-gray-100 text-gray-500">
            <p class="p-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </main>
</template>

