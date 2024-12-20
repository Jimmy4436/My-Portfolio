<template>
    <nav class="bg-primary text-white fixed md:static w-full z-10 top-0 left-0 bg-opacity-80  md:bg-opacity-100">
        <div class="container mx-auto flex justify-between items-center py-4 px-6">
            <div class="text-2xl font-bold">
                <router-link to="/">Jimmy Pardo</router-link>
            </div>
            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-6">
                <router-link to="/" class="hover:text-accent flex items-center">
                    <i class="fas fa-home mr-2"></i>Home
                </router-link>
                <router-link to="/about" class="hover:text-accent flex items-center">
                    <i class="fas fa-user mr-2"></i>About
                </router-link>
                <router-link to="/projects" class="hover:text-accent flex items-center">
                    <i class="fas fa-briefcase mr-2"></i>Projects
                </router-link>
                <router-link to="/skills" class="hover:text-accent flex items-center">
                    <i class="fas fa-cogs mr-2"></i>Skills
                </router-link>
                <router-link to="/contact" class="hover:text-accent flex items-center">
                    <i class="fas fa-envelope mr-2"></i>Contact
                </router-link>
            </div>
            <!-- Mobile Hamburger Icon -->
            <div class="md:hidden">
                <button @click="toggleMenu" class="focus:outline-none">
                    <i v-if="!isMenuOpen" class="fas fa-bars fa-2x"></i>
                    <i v-else class="fas fa-times fa-2x"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="md:hidden bg-primary bg-opacity-80">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <router-link to="/" class="block px-3 py-2 rounded-md text-base font-medium hover:text-accent" @click="closeMenu">Home</router-link>
                <router-link to="/about" class="block px-3 py-2 rounded-md text-base font-medium hover:text-accent" @click="closeMenu">About</router-link>
                <router-link to="/projects" class="block px-3 py-2 rounded-md text-base font-medium hover:text-accent" @click=closeMenu>Projects</router-link>
                <router-link to="/skills" class="block px-3 py-2 rounded-md text-base font-medium hover:text-accent" @click="closeMenu">Skills</router-link>
                <router-link to="/contact" class="block px-3 py-2 rounded-md text-base font-medium hover:text-accent" @click="closeMenu">Contact</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
    return {
        isMenuOpen: false,
    };
    },
    methods: {
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu () {
        this.isMenuOpen = false;
    },
    },
};
</script>
  