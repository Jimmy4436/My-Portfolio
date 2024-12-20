<template>
    <section class="bg-white">
        <div class="container mx-auto py-20 px-6">
            <h2 class="text-4xl font-bold text-primary mb-8">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div v-for="project in projects" :key="project.id" class="bg-background rounded-lg shadow hover:shadow-lg transition duration-300">
                    <img :src="project.image" :alt="project.title" class="rounded-t-lg h-48 w-full object-cover" />
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-2">{{ project.title }}</h3>
                        <p class="text-gray-700 mb-4">{{ project.description }}</p>
                        <router-link :to="project.link" class="text-accent hover:text-orange-500 font-semibold">
                            Read More
                        </router-link>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            projects: [
            {
                id: 1,
                title: 'Economic Senior Capstone Project',
                description: "Status Over Sense: Analyzing the Role of Social Status in College Students' Financial Decisions.",
                image: "capstone image.jpg",
                link: '/projects/capstone',
            },
                {
                    id: 2,
                    title: 'Google Data Analytics Certificate',
                    description: "Comprehensive data analysis project demonstrating skills in data visualization, SQL, and actionable insights.",
                    image: "google logo.jpg", 
                    link: '/projects/google-data-analytics',
                },
            ],
        };
    },
};
</script>