<template>
    <section class="bg-background">
        <div class="container mx-auto py-20 px-6">
            <h2 class="text-4xl font-bold text-primary mb-8">About Me</h2>
            <div class="flex flex-col md:flex-row items-start">
                <div class="md:w-1/3 mb-8 md:mb-0">
                    <img src="profile.jpeg" alt="About Jimmy" class="rounded-lg shadow-lg">
                </div>
                <div class="md:w-2/3 md:pl-10">
                    <p class="text-lg mb-6">
                    Born and raised in Orange County, California, I grew up with a strong work ethic instilled in me by my Mexican parents and grandmother.
                    Their dedication taught me the importance of perseverance, humility, and family values, which continue to guide me in all areas of my life. Growing up, 
                    I developed a strong curiosity for data and technology, which led me to pursue Economics and Computer Science as my areas of study. 
                    This early interest laid the groundwork for my career path today. 
                    </p>
                    <h3 class="text-2xl font-semibold text-primary mb-4">Education</h3>
                    <ul class="list-disc list-inside mb-6">
                        <li>B.A. Economics with Minor in Computer Science (Expected December 2024)</li>
                        <li>Google Data Analytics Certificate</li>
                    </ul>
                    <h3 class="text-2xl font-semibold text-primary mb-4">Interests</h3>
                    <p class="text-lg mb-6">Data Analysis, Technology, Cars, Fitness, Video Games, Anime, Manga.</p>
                    <a href="JimmyPardoResume.pdf" target="_blank" class="bg-accent text-white py-3 px-6 rounded hover:bg-orange-500 transition duration-300">View My Resume</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',
}
</script>
  