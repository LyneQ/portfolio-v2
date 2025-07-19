<script setup lang="ts">
import SkillsCard from "@/components/skills/SkillsCard.vue";

const frontendSkills = {
  title: "Frontend Development",
  imageSrc: "/frontend.svg",
  imageAlt: "Frontend Development",
  badges: [
    { text: 'TypeScript', iconName: 'IconTypescript' },
    { text: 'JavaScript', iconName: 'IconJavascript'},
    { text: 'Vue.js', iconName: 'IconVue' },
    { text: 'Nuxt.js', iconName: 'IconNuxt' },
    { text: 'React', iconName: 'IconReact'},
    { text: 'Next.js', iconName: 'IconNext' },
  ]
};

const backendSkills = {
  title: "Backend Development",
  imageSrc: "/backend.svg",
  imageAlt: "Backend Development",
  badges: [
    { text: 'Go', iconName: 'IconGo' },
    { text: 'Node.js', iconName: 'IconNodejs' },
    { text: 'Express', iconName: 'IconExpress' },
    { text: 'Prisma', iconName: 'IconPrisma' },
    { text: 'MongoDB', iconName: 'IconMongodb' }
  ]
};

const devopsSkills = {
  title: "DevOps & Tools",
  imageSrc: "/devops.svg",
  imageAlt: "DevOps and Tools",
  badges: [
    { text: 'Arch Linux', iconName: 'IconArch' },
    { text: 'Debian', iconName: 'IconDebian' },
    { text: 'Git', iconName: 'IconGit' },
    { text: 'GitHub', iconName: 'IconGithub' },
  ]
};
</script>

<template>
  <div id="skills">
    <div class="skills-header">
      <h1 class="animated-title">My Technical Skills</h1>
      <p class="animated-subtitle">Expertise across the full development stack</p>
    </div>
    <section class="skills-cards">
      <SkillsCard
          :title="frontendSkills.title"
          :image-src="frontendSkills.imageSrc"
          :image-alt="frontendSkills.imageAlt"
          :badges="frontendSkills.badges"
      />
      <SkillsCard
          :title="backendSkills.title"
          :image-src="backendSkills.imageSrc"
          :image-alt="backendSkills.imageAlt"
          :badges="backendSkills.badges"
      />
      <SkillsCard
          :title="devopsSkills.title"
          :image-src="devopsSkills.imageSrc"
          :image-alt="devopsSkills.imageAlt"
          :badges="devopsSkills.badges"
      />
    </section>
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/_variables' as *;

  .skills-header {
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

  #skills {
    padding: 5rem 2rem 7rem;

    background: #111;
    background-image:
        linear-gradient(35deg, hsl(258deg 39.34% 6.89%), 80%, hsla(252, 67%, 12%, 0.6)),
        linear-gradient(transparent calc(50% - 1px), #ffffff4a 1px, transparent calc(50% + 1px) 100%),
        linear-gradient(to right, transparent calc(50% - 1px), #ffffff4a 1px,
        transparent calc(50% + 1px) 100%);
    background-size: 100% 100%, 40px 40px, 40px 40px;
    min-height: 100vh;
  }

  .skills-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 2rem;
    position: absolute;
    bottom: 20vh;
    left: 0;
    right: 0;
    width: calc(100% - 4rem);
    max-width: 1400px;
    margin: 0 auto;
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