<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <h1 class="page-title">{{ pages.work.title }}</h1>

        <div class="section">
          <p>{{ pages.work.subtitle }}</p>
        </div>

        <div class="section">
          <h2 class="section-title">Projects</h2>

          <div
            v-for="project in allProjects"
            :key="project.title"
            class="item"
          >
            <h3 class="item-title">{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p class="item-meta">{{ project.technologies.join(', ') }}</p>
            <a
              v-if="project.url"
              class="external-link"
              :href="project.url"
              target="_blank"
            >
              {{ project.url.replace('https://', '') }}
            </a>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio';

const { pages, allProjects } = usePortfolio();
</script>

<style scoped>
@import '@/styles/pages.css';
</style>
