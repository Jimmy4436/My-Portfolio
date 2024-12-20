<template>
    <section class="bg-white">
        <div class="container mx-auto py-20 px-6">
            <h2 class="text-4xl font-bold text-primary mb-8">Contact Me</h2>
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 md:pr-8">
                    <form @submit.prevent="submitForm" class="space-y-6">
                    <div>
                        <label class="block text-lg font-semibold mb-2">Name</label>
                        <input v-model="form.name" type="text" required class="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-accent">
                    </div>
                    <div>
                        <label class="block text-lg font-semibold mb-2">Email</label>
                        <input v-model="form.email" type="email" required class="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-accent">
                    </div>
                    <div>
                        <label class="block text-lg font-semibold mb-2">Subject</label>
                        <input v-model="form.subject" type="text" required class="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-accent">
                    </div>
                    <div>
                        <label class="block text-lg font-semibold mb-2">Message</label>
                        <textarea v-model="form.message" required class="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-accent h-32"></textarea>
                    </div>
                    <button type="submit" class="bg-accent text-white py-3 px-6 rounded hover:bg-orange-500 transition duration-300">Send Message</button>
                    </form>
                </div>
                <div class="md:w-1/2 md:pl-8 mt-10 md:mt-0">
                    <h3 class="text-2xl font-semibold text-primary mb-6">Connect with me</h3>
                    <ul class="space-y-4">
                        <li class="flex items-center">
                            <i class="fas fa-envelope fa-lg text-accent mr-4"></i>
                            <span>pardojimmy4college@gmail.com</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-linkedin fa-lg text-accent mr-4"></i>
                            <a href="https://www.linkedin.com/in/jpardo4" class="hover:text-orange-500">LinkedIn</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-github fa-lg text-accent mr-4"></i>
                            <a href="https://github.com/Jimmy4436" class="hover:text-orange-500">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Contact',
    data() {
    return {
        form: {
        name: '',
        email: '',
        subject: '',
        message: '',
        },
    }
    },
    methods: {
    submitForm() {
        alert('Thank you for your message!');
    },
    },
}
</script>