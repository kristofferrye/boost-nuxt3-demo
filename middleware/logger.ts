export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Logging from named middleware')
    console.log(to)
    console.log(from)
})