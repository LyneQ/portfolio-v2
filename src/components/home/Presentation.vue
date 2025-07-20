<script setup lang="ts">

</script>

<template>
  <div class="presentation">
      <img src="https://placeholder.lyneq.tech/450x450?label=picture-of-me">
    <p class="text">
      As a junior full-stack developer, I’m passionate about building modern web applications that are both efficient
      and maintainable. My background includes working with technologies such as TypeScript, Go, Node.js, SvelteKit, and
      modern frontend tools like Tailwind CSS and Vue/Nuxt. I enjoy working across the stack, with a strong focus on
      clean code, structured logic, and a thoughtful approach to problem-solving.
      <br/> <br/>
      I thrive in collaborative environments where learning is continuous and code quality matters. I’m a fast learner
      who enjoys diving into new technologies and adapting quickly to project needs. Whether it’s setting up backend
      APIs, designing component-based frontends, or managing VPS deployments, I approach each task with precision and
      curiosity. My goal is to contribute meaningfully to development teams, delivering code that’s reliable, readable,
      and ready for real-world use.

      <span class="embed">
        If you're looking for a junior developer who takes code seriously, learns fast, and brings consistency to every project, I'm ready to join your team.
        I’m committed to writing clean, maintainable code and contributing to real-world solutions with focus and reliability.
        Let’s build something great — together.
      </span>
    </p>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;
.presentation {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
  justify-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  color: $c-text-dark-1;

  @include mobile-display {
    flex-direction: column;
    padding: 2rem 4rem;
  }
}


.text {
  font-size: 1.1rem;
  line-height: 1.5;
  width: 40vw;

  @media (max-width: 1000px){
    width: 100%;
  }
}
.embed {
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
  font-style: italic;
  border-left: 3px solid $c-text-dark-1;
  padding-left: 1rem;
}
</style>