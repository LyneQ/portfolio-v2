<script setup lang="ts">
import ProjectCard from "@/components/projects/ProjectCard.vue";

const projects = [
  {
    title: "Borning-Challenge",
    imageSrc: "/projects/borning.png",
    imageAlt: "Frontend Development Project",
  },
];
</script>

<template>
  <div id="projects">
    <div class="projects-header">
      <h1 class="animated-title">My Projects</h1>
      <p class="animated-subtitle">A showcase of my recent work and personal projects</p>
    </div>
    <section class="projects-container">
      <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :image-src="project.imageSrc"
          :image-alt="project.imageAlt"
      >
        <p>
          Designed for Alstom, the Borning-Challenge app is an internal web application that promotes physical activity
          and team collaboration by offering gamified sports challenges. The app encourages employees to participate in
          physical challenges, alone or in teams.
          culture.
          <br/> <br/>
          Built with performance and usability in mind, the app features progress tracking, user-friendly
          interfaces and scalable components that are adapted to Alstom's internal infrastructure. This project
          demonstrates my ability to translate corporate requirements into an engaging, functional digital product that
          promotes health, motivation and collaboration.
        </p>
      </ProjectCard>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;

#projects {
  padding: 5rem 2rem 7rem;
  background: #111;
  background-image: linear-gradient(35deg, hsl(258deg 39.34% 6.89%), 80%, hsla(252, 67%, 12%, 0.6)),
  linear-gradient(transparent calc(50% - 1px), #ffffff4a 1px, transparent calc(50% + 1px) 100%),
  linear-gradient(to right, transparent calc(50% - 1px), #ffffff4a 1px,
          transparent calc(50% + 1px) 100%);
  background-size: 100% 100%, 40px 40px, 40px 40px;
  min-height: 100vh;
}

.projects-header {
  padding: 8rem 2rem 2rem;
  text-align: center;

  .animated-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: $c-white;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    animation: fadeInDown 1.2s ease-out forwards;
  }

  .animated-subtitle {
    font-size: 1.5rem;
    color: $c-text-dark-2;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0;
    animation: fadeIn 1.5s ease-out 0.5s forwards;
  }
}

.projects-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>