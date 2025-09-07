<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <h1 class="page-title">About</h1>

        <div class="section">
          <p>{{ personal.aboutSummary }}</p>
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

        <div v-if="personal.availability" class="section">
          <h2 class="section-title">Availability</h2>
          <div class="availability-grid">
            <div class="availability-card">
              <h3 class="availability-title">Notice Period</h3>
              <p class="availability-value">{{ personal.availability.notice }}</p>
            </div>
            <div class="availability-card">
              <h3 class="availability-title">Remote Work</h3>
              <p class="availability-value">{{ personal.availability.remote }}</p>
            </div>
            <div class="availability-card">
              <h3 class="availability-title">Relocation</h3>
              <p class="availability-value">{{ personal.availability.relocation }}</p>
            </div>
          </div>
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
            <p class="item-meta">{{ experience.period }} • {{ experience.location }}</p>
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
            <p class="item-meta">{{ edu.graduationDate }} • {{ edu.location }}</p>
            <p><strong>GPA:</strong> {{ edu.gpa }}{{ edu.honors ? ` • ${edu.honors}` : '' }}</p>
          </div>
        </div>

        <div v-if="certifications && certifications.length > 0" class="section">
          <h2 class="section-title">Certifications</h2>
          <div
            v-for="cert in certifications"
            :key="cert.title"
            class="item"
          >
            <h3 class="item-title">{{ cert.title }}</h3>
            <p class="item-subtitle">{{ cert.issuer }}</p>
            <p class="item-meta">{{ cert.date }}{{ cert.credentialId ? ` • ${cert.credentialId}` : '' }}</p>
            <a
              v-if="cert.url"
              class="external-link"
              :href="cert.url"
              target="_blank"
            >
              View Certificate
            </a>
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
            <p v-if="researchItem.description">{{ researchItem.description }}</p>
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

        <div class="section">
          <h2 class="section-title">Skills Overview</h2>
          <div class="skills-overview">
            <div
              v-for="(skillList, category) in skillsData"
              :key="category"
              class="skill-category-overview"
            >
              <h4 class="skill-category-title clickable" @click="openCategoryDialog(String(category), skillList)">{{ category }}</h4>
              <div class="skill-tags">
                <v-tooltip
                  v-for="skill in skillList.slice(0, 5)"
                  :key="skill.name"
                  class="skill-tooltip-wrapper"
                  :close-delay="200"
                  location="top"
                  :open-delay="300"
                >
                  <template #activator="{ props }">
                    <span
                      v-bind="props"
                      class="skill-tag"
                    >
                      {{ skill.name }}
                    </span>
                  </template>
                  <div class="skill-tooltip-content">
                    <div class="skill-tooltip-name">{{ skill.name }}</div>
                    <div class="skill-tooltip-proficiency">{{ skill.proficiency }}</div>
                    <div class="skill-tooltip-level">{{ skill.level }}%</div>
                  </div>
                </v-tooltip>
                <span v-if="skillList.length > 5" class="skill-more" @click="openCategoryDialog(String(category), skillList)">
                  +{{ skillList.length - 5 }} more
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Category Skills Dialog -->
        <v-dialog v-model="categoryDialog" max-width="700">
          <v-card>
            <v-card-title class="headline">{{ selectedCategory }} Skills</v-card-title>
            <v-card-text>
              <div class="category-skills-grid">
                <div
                  v-for="skill in selectedCategorySkills"
                  :key="skill.name"
                  class="skill-card"
                >
                  <div class="skill-card-name">{{ skill.name }}</div>
                  <div class="skill-card-proficiency">{{ skill.proficiency }}</div>
                  <v-progress-linear
                    class="skill-card-progress"
                    :color="getProgressColor(skill.level)"
                    height="8"
                    :model-value="skill.level"
                  />
                  <div class="skill-card-level">{{ skill.level }}%</div>
                </div>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text @click="categoryDialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePortfolio } from '@/composables/usePortfolio';
import type { Skill } from '@/types/portfolio';

const { personal, workExperience, education, research, certifications, skills } = usePortfolio();

const skillsData = skills;

// Dialog state
const categoryDialog = ref(false);
const selectedCategory = ref('');
const selectedCategorySkills = ref<Skill[]>([]);

// Methods
const openCategoryDialog = (category: string, skills: Skill[]) => {
  selectedCategory.value = category;
  selectedCategorySkills.value = skills;
  categoryDialog.value = true;
};

const getProgressColor = (level: number | undefined) => {
  if (!level) return 'grey';
  if (level >= 90) return 'green';
  if (level >= 80) return 'light-green';
  if (level >= 70) return 'orange';
  if (level >= 60) return 'deep-orange';
  return 'red';
};
</script>

<style scoped>
@import '@/styles/pages.css';

.skills-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.skill-category-overview {
  background: rgba(var(--v-theme-surface-variant), 0.1);
  border-radius: 8px;
  padding: 16px;
}

.skill-category-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: rgb(var(--v-theme-primary));
  transition: all 0.2s ease;
}

.skill-category-title.clickable {
  cursor: pointer;
}

.skill-category-title.clickable:hover {
  color: rgb(var(--v-theme-primary));
  text-decoration: underline;
  transform: translateX(2px);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: rgba(var(--v-theme-primary), 0.15);
}

.skill-more {
  background: rgba(var(--v-theme-surface-variant), 0.2);
  color: rgb(var(--v-theme-on-surface-variant));
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-style: italic;
  cursor: pointer;
  transition: all 0.2s ease;
}

.skill-more:hover {
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  transform: translateY(-1px);
}

/* Custom tooltip styles following Index page pattern */
:deep(.skill-tooltip-wrapper .v-overlay__content) {
  background: rgba(0, 0, 0, 0.9) !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  padding: 12px 16px;
  color: #ffffff !important;
  backdrop-filter: blur(8px);
}

.skill-tooltip-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
  font-size: 0.85rem;
}

.skill-tooltip-name {
  font-weight: 700;
  font-size: 0.9rem;
  color: #64B5F6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}

.skill-tooltip-proficiency {
  font-size: 0.8rem;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-tooltip-level {
  font-size: 0.75rem;
  color: #81C784;
  font-weight: 600;
  font-family: 'Courier New', monospace;
}

.category-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.skill-card {
  background: rgba(var(--v-theme-surface-variant), 0.1);
  border: 1px solid rgba(var(--v-theme-outline-variant), 0.2);
  border-radius: 8px;
  padding: 16px;
  transition: all 0.2s ease;
}

.skill-card:hover {
  background: rgba(var(--v-theme-surface-variant), 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.skill-card-name {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 4px;
  color: rgb(var(--v-theme-on-surface));
}

.skill-card-proficiency {
  font-size: 0.8rem;
  color: rgb(var(--v-theme-primary));
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.skill-card-progress {
  margin-bottom: 8px;
  border-radius: 4px;
}

.skill-card-level {
  text-align: right;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface-variant));
}

@media (max-width: 768px) {
  .skills-overview {
    grid-template-columns: 1fr;
  }

  .availability-grid {
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

.availability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.availability-card {
  background: rgba(var(--v-theme-surface-variant), 0.1);
  border: 1px solid rgba(var(--v-theme-outline-variant), 0.2);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.2s ease;
}

.availability-card:hover {
  background: rgba(var(--v-theme-surface-variant), 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.availability-title {
  color: rgb(var(--v-theme-primary));
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.availability-value {
  color: rgb(var(--v-theme-on-surface));
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
}
</style>
