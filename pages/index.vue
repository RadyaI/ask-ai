<template>
    <div>
        <div class="container">
            <Navbar />
            <main>
                <div class="wrapper">
                    <h2><span style="color: var(--secondary-color);">Ask</span>.Ai</h2>
                    <div class="ask-input"
                        :style="{ 'height': state.beforeAsk ? '70%' : '10%', 'transition': !state.beforeAsk ? 'height 1s' : 'none' }">
                        <input type="text" required :placeholder="state.placeholder" v-model="state.msg"
                            @keyup.enter="getAnswer">
                        <button type="submit" class="btn-ask" v-on:click="getAnswer" aria-label="Submit">
                            <div class="loader" v-if="!state.beforeAsk && state.load"></div>
                            <i class="fa-solid fa-arrow-up" v-else></i>
                        </button>
                    </div>
                    <section>
                        <Card v-if="state.showCard" :isLoading="state.load" :msg="state.msg" />
                    </section>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Navbar from '../layouts/navbar.vue';
import Card from '../layouts/cardAnswer.vue';
import { useHead } from 'nuxt/app';

useHead({
    title: 'Ask Ai',
    link: [
        { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" }
    ],
    meta: [
        { name: 'description', content: 'Tanyakan apa saja pada AI di website ini!' },
        { name: 'keywords', content: 'ai, ask ai, tanya ai, chat gpt' },
        { name: 'author', content: 'M Radya I' },
        { name: 'robots', content: 'index, follow' }
    ]
})

const state = reactive({
    title: 'Home',
    msg: null,
    placeholder: 'Ask...',
    beforeAsk: true,
    showCard: false,
    load: false
})

function getAnswer() {
    if (state.msg != null) {
        state.showCard = false
        state.beforeAsk = false
        state.load = true
        setTimeout(() => {
            state.showCard = true
        }, 1000);
        setTimeout(() => {
            state.load = false
        }, 5000);
    } else {
        state.placeholder = "Inputnya disini dulu!"
        setTimeout(() => {
            state.placeholder = "Ask..."
        }, 1200);
    }
}

</script>

<style>
@import url("/assets/css/style.css");
</style>