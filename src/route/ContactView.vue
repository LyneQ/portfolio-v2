<script setup lang="ts">
import IconGithub from "@/components/icons/IconGithub.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";

const socialMediaLinks = [
  {
    name: "GitHub",
    url: "https://github.com/lyneq",
    icon: IconGithub,
    description: "Check out my code repositories and contributions"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/quequin-lyne/",
    icon: IconLinkedin,
    description: "Connect with me professionally and view my work experience"
  },
  {
    name: "Email",
    url: "mailto:hey@lyneq.tech",
    icon: IconMail,
    description: "Contact me directly for collaboration or job opportunities"
  }
];
</script>

<template>
  <div id="contact">
    <div class="contact-header">
      <h1 class="animated-title">Contact Me</h1>
      <p class="animated-subtitle">Connect with me on social media or send me an email</p>
    </div>
    <section class="social-media-container">
      <div v-for="(link, index) in socialMediaLinks" :key="index" class="social-media-card">
        <a :href="link.url" target="_blank" rel="noopener noreferrer" class="social-media-link">
          <div class="icon-container">
            <component :is="link.icon" class="social-icon" />
          </div>
          <div class="social-content">
            <h3 class="social-name">{{ link.name }}</h3>
            <p class="social-description">{{ link.description }}</p>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/_variables' as *;

  #contact {
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

  .contact-header {
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

  .social-media-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .social-media-card {
    width: 100%;
    border-radius: $v-border-radius;
    background: $c-black-soft;
    background-image: linear-gradient(35deg, hsl(258deg 39.34% 6.89%), 80%, hsla(252, 67%, 12%, 0.6));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border: $v-border-width $v-border-style $c-divider-dark-1;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
  }

  .social-media-link {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
  }

  .icon-container {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    
    .social-icon {
      width: 100%;
      height: 100%;
      color: $c-primary;
    }
  }

  .social-content {
    flex: 1;
  }

  .social-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: $c-text-dark-1;
    margin-bottom: 0.5rem;
  }

  .social-description {
    font-size: 1rem;
    color: $c-text-dark-2;
    line-height: 1.5;
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