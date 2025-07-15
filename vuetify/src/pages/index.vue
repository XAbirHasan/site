<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <h1 class="page-title">{{ personal.name }}</h1>
        <p class="page-subtitle">{{ personal.title }}</p>

        <div class="location-time section">
          <div class="location-info">
            <span class="location">📍 {{ personal.location }}</span>
            <span class="timezone">{{ personal.timezoneDisplay }}</span>
        <h1 class="page-title">Md Abir Hassan</h1>
        <p class="page-subtitle">Software Engineer</p>
          </div>
        </div>

        <div class="contact-links section">
          <a :href="`mailto:${personal.email}`">{{ personal.email }}</a>
          <span class="contact-separator">•</span>
          <a :href="personal.linkedin" target="_blank">LinkedIn</a>
          <span class="contact-separator">•</span>
          <a :href="personal.github" target="_blank">GitHub</a>
        </div>

        <div class="section">
          <p>{{ personal.summary }}</p>
        </div>

        <div class="section">
          <h2 class="section-title">Skills</h2>
          <div class="skills-grid">
            <div
              v-for="category in skillCategories"
              :key="category"
              class="skill-category"
            >
              <h3 class="item-title">{{ category }}</h3>
              <p class="skill-list">{{ getSkillsByCategory(category).join(', ') }}</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">Projects</h2>
          <div
            v-for="project in featuredProjects"
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
const {
  personal,
  skillCategories,
  getSkillsByCategory,
  featuredProjects,
} = usePortfolio();

</script>

<style scoped>
@import '@/styles/pages.css';

/* Location and time display - specific to Index page */
.location-time {
  margin-bottom: 24px;
}

.location-info {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 0.95rem;
  color: rgb(var(--v-theme-on-surface-variant));
}

.location {
  display: flex;
  align-items: center;
  gap: 4px;
}

.timezone {
  font-family: 'Courier New', monospace;
  background: rgba(var(--v-theme-surface-variant), 0.5);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85rem;
}

/* Responsive design for location/time */
@media (max-width: 600px) {
  .location-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .location-info > span {
    align-self: flex-start;
  }
}
</style>
