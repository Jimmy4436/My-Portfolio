<template>
    <section class="bg-background">
        <div class="container mx-auto py-20 px-6">
            <h2 class="text-4xl font-bold text-primary mb-8">Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <!-- Technical Skills -->
            <div>
                <h3 class="text-2xl font-semibold text-primary mb-4">Technical Skills</h3>
                <ul class="space-y-4">
                    <li v-for="(skill, index) in technicalSkills" :key="index" class="flex items-center">
                        <i :class="skill.iconClass + ' fa-2x mr-4'" :style="{ color: skill.color }"></i>
                        <span>{{ skill.name }}</span>
                    </li>
                </ul>
            </div>

            <!-- Soft Skills -->
            <div>
                <h3 class="text-2xl font-semibold text-primary mb-4">Soft Skills</h3>
                <ul class="list-disc list-inside text-lg">
                    <li v-for="(skill, index) in softSkills" :key="index">{{ skill }}</li>
                </ul>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Skills',
    data() {
    return {
        technicalSkills: [
        {
            name: 'HTML5',
            iconClass: 'fab fa-html5',
            color: '#E34F26',
        },
        {
            name: 'CSS3',
            iconClass: 'fab fa-css3-alt',
            color: '#1572B6',
        },
        {
            name: 'SQL',
            iconClass: 'fas fa-database',
            color: '#4DB33D',
        },
        {
            name: 'Office Suite',
            iconClass: 'fab fa-windows',
            color: '#F25022',
        },
        {
            name: 'R Language',
            iconClass: 'fab fa-r-project',
            color: '#276DC3',
        },
        ],
        softSkills: [
        'Quick Learner',
        'Team Player',
        'Dependable',
        'Hard Worker',
        'Easy Going',
        ],
    };
    },
};
</script>
  