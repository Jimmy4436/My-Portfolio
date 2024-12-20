<template>
  <div class="container mx-auto p-8">
    <h2 class="text-3xl font-bold mb-6">{{ project.title }}</h2>
    <p class="italic mb-4">{{ project.subtitle }}</p>
    <p class="mb-4">{{ project.description }}</p>

   
    <a 
      v-if="project.pdfPath" 
      :href="project.pdfPath" 
      target="_blank" 
      class="bg-accent text-white py-3 px-6 rounded hover:bg-orange-500 transition duration-300"
    >
      View Here
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetails',
  data() {
    return {
      project: {},
    };
  },
  created() {
    const projects = {
      capstone: {
        title: 'Economic Senior Capstone Project',
        subtitle: 'Status Over Sense',
        description: `Conducted a 13-page research study on college students’ spending on non-essential items. 
                      Developed an empirical utility model to analyze and explain the decision-making surrounding these purchases. 
                      Presented findings in a 15-minute presentation, showcasing data-driven insights on students' spending behavior.`,
        pdfPath: '/StatusOverSense.pdf', 
      },
      'google-data-analytics': {
        title: 'Google Data Analytics Certificate',
        subtitle: 'Actionable Insights Through Data Analysis',
        description: `Completed a comprehensive capstone project focused on analyzing and visualizing data using R and Tableau. 
                      Delivered actionable insights through storytelling with data and statistical methods.`,
        pdfPath: '/GoogleCertificate.pdf', 
      },
    };

    const projectId = this.$route.params.id;
    if (projects[projectId]) {
      this.project = projects[projectId];
    }
  },
};
</script>

<style>

.bg-accent {
  background-color: #007bff; 
}
.hover\:bg-orange-500:hover {
  background-color: #ff7043; 
}
</style>