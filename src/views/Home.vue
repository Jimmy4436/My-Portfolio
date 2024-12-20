<template>
    <section class="bg-white">
    <div class=" mx-auto container flex flex-col-reverse md:flex-row items-center py-20 px-6">
        <div class="md:w-1/2 mt-10 md:mt-0">
            <h1 class="text-5xl font-bold text-primary mb-6">Hello! I'm Jimmy Pardo</h1>
            <p class="text-xl mb-6">
                A senior undergraduate student at CSUF majoring in Economics and minoring in Computer Science.
                This portfolio is an accumulation of my learning experiences and skills throughout my educational journey. 
            </p>
            <p class="text-lg italic mb-6">
                "No matter how gradual, my perseverance has guided me to become who I am today."
            </p>
            <router-link to="/contact" 
                class="bg-accent text-white py-3 px-6 rounded hover:bg-orange-500 transition duration-300">
                Get in Touch
            </router-link>
        </div>
        <div class="md:w-1/2 flex justify-center">
            <img src="profile.jpeg" alt="Jimmy Pardo" 
            class="rounded-full w-80 h-80 object-cover shadow-lg">
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name: 'Home',
}
</script>
  