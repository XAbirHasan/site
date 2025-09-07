<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <h1 class="page-title">{{ personal.name }}</h1>
        <p class="page-subtitle">{{ personal.title }}</p>

        <div class="location-time section">
          <div class="location-info">
            <span class="location">📍 {{ personal.location }}</span>
            <span>({{ personal.timezoneDisplay }})</span>
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

        <div v-if="personal.openToRemote || personal.openToRelocation" class="availability-info section">
          <span class="availability-flag">🌍</span>
          <span v-if="personal.openToRemote" class="availability-text">Open to Remote</span>
          <span v-if="personal.openToRemote && personal.openToRelocation" class="availability-separator">|</span>
          <span v-if="personal.openToRelocation" class="availability-text">
            Relocation
            <span v-if="personal.relocationNote" class="relocation-note">({{ personal.relocationNote }})</span>
          </span>
        </div>

        <div class="section">
          <p>{{ personal.summary }}</p>
        </div>

        <div v-if="workExperience && workExperience.length > 0" class="section">
          <h2 class="section-title">Current Role</h2>
          <div class="current-role">
            <h3 class="role-title">{{ workExperience[0].position }}</h3>
            <div class="role-company">{{ workExperience[0].company }}</div>
            <div class="role-subtitle">{{ workExperience[0].subtitle }}</div>
            <div class="role-period">{{ workExperience[0].period }}</div>
            <p class="role-description">{{ workExperience[0].description }}</p>
          </div>
        </div>

        <div v-if="personal.coreStrengths && personal.coreStrengths.length > 0" class="section">
          <h2 class="section-title">Core Strengths</h2>
          <div class="core-strengths">
            <span
              v-for="strength in personal.coreStrengths"
              :key="strength"
              class="strength-tag"
            >
              {{ strength }}
            </span>
          </div>
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
              <p class="skill-list">{{ getSkillNamesByCategory(category).join(', ') }}</p>
            </div>
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
  getSkillNamesByCategory,
  workExperience,
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

.phone-number {
  color: rgb(var(--v-theme-on-surface-variant));
  font-family: 'Courier New', monospace;
}

.core-strengths {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.strength-tag {
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
  transition: all 0.2s ease;
}

.strength-tag:hover {
  background: rgba(var(--v-theme-primary), 0.15);
  transform: translateY(-1px);
}

.availability-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
  margin-top: 8px;
}

.availability-item {
  background: rgba(var(--v-theme-surface-variant), 0.1);
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 3px solid rgb(var(--v-theme-primary));
  font-size: 0.9rem;
}

.availability-item strong {
  color: rgb(var(--v-theme-primary));
  display: block;
  margin-bottom: 4px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .availability-info {
    grid-template-columns: 1fr;
  }

  .core-strengths {
    gap: 6px;
  }

  .strength-tag {
    font-size: 0.85rem;
    padding: 4px 10px;
  }
}

.page-subtitle-secondary {
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 0.9rem;
  margin-top: -8px;
  margin-bottom: 16px;
  font-style: italic;
}

.remote-info {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  background: rgba(var(--v-theme-primary), 0.1);
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.9rem;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.current-role {
  background: rgba(var(--v-theme-surface-variant), 0.1);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid rgb(var(--v-theme-primary));
  margin-top: 8px;
}

.role-title {
  color: rgb(var(--v-theme-primary));
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.role-company {
  font-size: 1.1rem;
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 4px;
}

.role-subtitle {
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-style: italic;
  margin-bottom: 4px;
}

.role-period {
  font-size: 0.85rem;
  color: rgb(var(--v-theme-on-surface-variant));
  margin-bottom: 12px;
  font-weight: 500;
}

.role-description {
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
  margin: 0;
}

.availability-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: rgb(var(--v-theme-on-surface-variant));
  background: rgba(var(--v-theme-primary), 0.05);
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 3px solid rgb(var(--v-theme-primary));
}

.availability-flag {
  font-size: 1.1rem;
}

.availability-text {
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface));
}

.availability-separator {
  color: rgb(var(--v-theme-on-surface-variant));
  margin: 0 4px;
}

.relocation-note {
  font-size: 0.85rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-style: italic;
}

@media (max-width: 768px) {
  .current-role {
    padding: 16px;
  }

  .role-title {
    font-size: 1.1rem;
  }

  .role-company {
    font-size: 1rem;
  }

  .availability-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    text-align: left;
  }

  .availability-separator {
    display: none;
  }
}
</style>
