<template>
    <div class="flex flex-col min-h-screen">
        <NavBar />
        <main class="flex-grow">
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'

export default {
    components: {
    NavBar,
    Footer,
    },
}
</script>