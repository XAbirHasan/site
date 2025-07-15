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
            <v-tooltip class="time-tooltip" location="top">
              <template #activator="{ props }">
                <span class="live-clock" v-bind="props">
                  🕐 {{ currentTime }}
                </span>
              </template>
              <div class="tooltip-content">
                <div class="tooltip-time">Your time: {{ userLocalTime }}</div>
                <div class="tooltip-time">{{ personal.location }}: {{ currentTime }}</div>
              </div>
            </v-tooltip>
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
import { onMounted, onUnmounted, ref } from 'vue';
import { usePortfolio } from '@/composables/usePortfolio';
import { useLiveClock } from '@/composables/useLiveClock';

const {
  personal,
  skillCategories,
  getSkillsByCategory,
  featuredProjects,
} = usePortfolio();

const { currentTime } = useLiveClock(personal.value.timezone);

const userLocalTime = ref('');
let timeInterval: number;

const updateUserLocalTime = () => {
  userLocalTime.value = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

onMounted(() => {
  updateUserLocalTime();
  timeInterval = setInterval(updateUserLocalTime, 1000);
});

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
});
</script>

<style scoped>
@import '@/styles/pages.css';

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

.live-clock {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Courier New', monospace;
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 500;
  cursor: help;
  transition: all 0.2s ease;
}

.live-clock:hover {
  background: rgba(var(--v-theme-primary), 0.15);
  transform: scale(1.02);
}

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

/* Custom tooltip styles */
:deep(.time-tooltip .v-overlay__content) {
  background: rgba(0, 0, 0, 0.9) !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  padding: 12px 16px;
  color: #ffffff !important;
  backdrop-filter: blur(8px);
}

.tooltip-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
  font-size: 0.85rem;
}

.tooltip-time {
  font-family: 'Courier New', monospace;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}

.tooltip-time:first-child {
  color: #64B5F6;
  font-weight: 700;
}
</style>
