<script setup lang="ts"></script>

<template>
  <div class="alert">
    <slot></slot>
  </div>
</template>

<style scoped>
.alert {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--blanco);
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.8rem;
  padding: 0.5rem;
}
</style>
