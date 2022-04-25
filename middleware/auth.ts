export default defineNuxtRouteMiddleware((to, from) => {

    const isAuthenticated = false

    const hasSecretAccess = to.query.secretKey === "123"

    if (hasSecretAccess) {
        return
    }

    if (!isAuthenticated) {
        return abortNavigation("NOT ALLOWED")
    }
    // return navigateTo("/item/3")
})