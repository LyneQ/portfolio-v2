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
        'Prisma ORM', 'SQLite', 'PostgreSQL', 'Bun', 'Figma',
        'UI/UX Design', 'VPS Management', 'GORM', 'SMTP (Gomail)',
        'SCS (Session Management)', 'Linux (Arch linux and debian)',
    ],
    hardWorker: true,
    problemSolver: true,
    aestheticLover: true,
    yearsOfExperience: 2,
    hireable: function () {
        return (
            this.hardWorker &&
            this.quickLearner &&
            this.problemSolver &&
            this.yearsOfExperience = 1
        );
    },
    tagline: "Codes like she crafts spells: with precision, flair, and empathy."
};

`
</script>

<template>
  <section id="presentation">
    <Who />
    <WhoCode :code="codeLines" />
  </section>
</template>

<style scoped lang="scss">

#presentation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin: 3rem 2rem;
}
</style>