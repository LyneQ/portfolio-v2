<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
  >
    <!-- Background circle -->
    <circle cx="50" cy="50" r="45" fill="#1b263b" />
    
    <!-- Database cylinder -->
    <ellipse cx="50" cy="30" rx="20" ry="10" fill="none" stroke="#4cc9f0" stroke-width="3" />
    <path d="M30,30 L30,70 C30,75.5 39,80 50,80 C61,80 70,75.5 70,70 L70,30" fill="none" stroke="#4cc9f0" stroke-width="3" />
    
    <!-- Database lines -->
    <path d="M30,50 C30,55.5 39,60 50,60 C61,60 70,55.5 70,50" fill="none" stroke="#4cc9f0" stroke-width="2" />
    
    <!-- Connection lines representing data flow -->
    <path d="M75,40 L85,40 M75,60 L85,60" stroke="#4361ee" stroke-width="3" stroke-linecap="round" />
    <path d="M15,40 L25,40 M15,60 L25,60" stroke="#4361ee" stroke-width="3" stroke-linecap="round" />
  </svg>
</template>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>