<script setup lang="ts">

import Who from "@/components/home/Who.vue";
import WhoCode from "@/components/home/WhoCode.vue";


const codeLines = `
const profile = {
    name: 'Lyne Q.',
    title: 'Full-Stack Developer | UI/UX Explorer | Code with Passion',
    skills: [
        'Go', 'Node.js', 'SvelteKit', 'Vue.js', 'Nuxt.js',
        'React', 'TypeScript', 'JavaScript', 'Drizzle ORM',
        'Prisma ORM', 'SQLite', 'PostgreSQL', 'GORM',
        'SMTP (Gomail)', 'Linux (Arch linux and debian)',
    ],
    hireable: function () {
        return (
            this.hardWorker &&
            this.quickLearner &&
            this.problemSolver &&
            this.yearsOfExperience = 1
        );
    }};
`
</script>

<template>
  <section id="presentation">
    <Who/>
    <WhoCode :code="codeLines" title="developer.js"/>
  </section>
  <section id="presentation-large" style="min-height: 100vh">

  </section>
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;

#presentation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  min-height: 100vh;

  padding: 7rem 2rem;

  background: #111;
  background-image: linear-gradient(
          35deg,
          hsl(258, 49%, 15%),
          80%,
          hsla(252, 67%, 12%, 0.6)
  ),
  linear-gradient(
          transparent calc(50% - 1px),
          #fff 1px,
          transparent calc(50% + 1px) 100%
  ),
  linear-gradient(
          to right,
          transparent calc(50% - 1px),
          #fff 1px,
          transparent calc(50% + 1px) 100%
  );
  background-size: 100% 100%, 40px 40px, 40px 40px;


  @include mobile-display {
    grid-template-columns: none;
    padding: 2rem;
  }
}
#presentation-large {

}
</style>