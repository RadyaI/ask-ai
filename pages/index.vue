<template>
    <div>
        <div class="container">
            <Navbar />
            <main>
                <div class="wrapper">
                    <h2><span style="color: var(--secondary-color);">Ask</span>.Ai</h2>
                    <div class="ask-input" :style="{'height' : state.beforeAsk ? '70%' : '10%', 'transition' : !state.beforeAsk ? 'height 1s' : 'none'}">
                        <input type="text" placeholder="Ask...">
                        <button class="btn-ask"><i class="fa-solid fa-arrow-up"></i></button>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import Navbar from '../layouts/navbar.vue';

export default {
    components: {
        Navbar
    },
    setup() {
        const state = reactive({
            title: 'Home',
            beforeAsk: true
        })

        return { state }
    }
}
</script>

<style>
@import url("/assets/css/style.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");
</style>