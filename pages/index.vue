<template>
    <div class="landing-page">
        <h1>Selamat Datang di {{ state.title }}</h1>
        <p>Ini adalah halaman landing page Anda.</p>
        <router-link to="/halo">ke halo</router-link>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const state = reactive({
            title: 'Home'
        })

        return { state }
    }
}
</script>

<style scoped>
.landing-page {
    text-align: center;
    margin-top: 50px;
}
</style>