<script setup lang="ts">

import Who from "@/components/home/Who.vue";
import WhoCode from "@/components/home/WhoCode.vue";
import Presentation from "@/components/home/Presentation.vue";


const codeLines = `
const profile = {
    name: 'Lyne Q.',
    title: 'Full-Stack Developer | UI/UX Explorer | Code with Passion',
    skills: [
        'Go', 'Node.js', 'SvelteKit', 'Vue.js', 'Nuxt.js',
        'React', 'Next.js', 'TypeScript', 'JavaScript',
        'Drizzle ORM', 'Prisma ORM', 'SQLite', 'GORM',
        'SMTP (Gomail)', 'Linux (Arch and debian)',
    ],
    hireable: function () {
        return (
            this.hardWorker &&
            this.quickLearner &&
            this.problemSolver &&
            this.yearsOfExperience = 1
        );
    }
};`
//TODO: correct responsive for <Who/> (media width)
</script>

<template>
  <section id="presentation">
    <Who/>
    <WhoCode :code="codeLines" title="developer.js"/>
  </section>
  <section id="presentation-large">
    <Presentation/>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;

#presentation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  min-height: 100vh;

  padding: 10rem 2rem 7rem;

  background: #111;
  background-image:
      linear-gradient(35deg, hsl(258deg 39.34% 6.89%), 80%, hsla(252, 67%, 12%, 0.6)),
      linear-gradient(transparent calc(50% - 1px), #ffffff4a 1px, transparent calc(50% + 1px) 100%),
      linear-gradient(to right, transparent calc(50% - 1px), #ffffff4a 1px,
          transparent calc(50% + 1px) 100%);
  background-size: 100% 100%, 40px 40px, 40px 40px;


  @media (max-width: 1300px) {
    grid-template-columns: none;
  }
}

#presentation-large {
  min-height: 60vh;
  padding: 4rem 0;

  background: #111;

  background-image: linear-gradient(to bottom, hsl(258deg 39.34% 6.89%) 0%, #111 20%);

  background-repeat: no-repeat;
  background-size: cover;
}
</style>