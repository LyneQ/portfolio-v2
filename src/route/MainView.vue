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
    },
};

`
</script>

<template>
  <section id="presentation">
    <Who />
    <WhoCode :code="codeLines" title="developer.js" />
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;

#presentation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin: 3rem 2rem;

  @include mobile-display {
    grid-template-columns: none;
  }
}
</style>