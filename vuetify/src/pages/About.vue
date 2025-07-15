<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <h1 class="page-title">About</h1>

        <div class="section">
          <p>{{ personal.aboutSummary }}</p>
        </div>

        <div class="section">
          <h2 class="section-title">Work Experience</h2>

          <div
            v-for="experience in workExperience"
            :key="`${experience.company}-${experience.position}`"
            class="item"
          >
            <h3 class="item-title">{{ experience.position }}</h3>
            <p class="item-subtitle">{{ experience.company }}{{ experience.subtitle ? ` (${experience.subtitle})` : '' }}</p>
            <p class="item-meta">{{ experience.period }}</p>
            <p>{{ experience.description }}</p>
            <ul class="item-list">
              <li v-for="achievement in experience.achievements" :key="achievement">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">Education</h2>
          <div
            v-for="edu in education"
            :key="`${edu.institution}-${edu.degree}`"
            class="item"
          >
            <h3 class="item-title">{{ edu.degree }}</h3>
            <p class="item-subtitle">{{ edu.institution }}</p>
            <p class="item-meta">{{ edu.graduationDate }}</p>
            <p>CGPA: {{ edu.gpa }}</p>
          </div>
        </div>

        <div v-if="research && research.length > 0" class="section">
          <h2 class="section-title">Research</h2>
          <div
            v-for="researchItem in research"
            :key="researchItem.title"
            class="item"
          >
            <h3 class="item-title">{{ researchItem.title }}</h3>
            <p class="item-meta">{{ researchItem.status }}</p>
            <a
              v-if="researchItem.url"
              class="external-link"
              :href="researchItem.url"
              target="_blank"
            >
              {{ researchItem.url }}
            </a>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio';

const { personal, workExperience, education, research } = usePortfolio();
</script>

<style scoped>
@import '@/styles/pages.css';
</style>
