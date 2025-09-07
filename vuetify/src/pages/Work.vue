<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <h1 class="page-title">{{ pages.work.title }}</h1>

        <div class="section">
          <p>{{ pages.work.subtitle }}</p>
        </div>

        <!-- Category Filter -->
        <div class="section">
          <div class="filter-chips">
            <v-chip
              v-for="category in projectCategories"
              :key="category"
              class="filter-chip"
              :color="selectedCategory === category ? 'primary' : 'default'"
              :variant="selectedCategory === category ? 'elevated' : 'outlined'"
              @click="selectedCategory = category"
            >
              {{ formatCategoryName(category) }}
              <span class="chip-count">({{ getProjectsByCategory(category).length }})</span>
            </v-chip>
            <v-chip
              class="filter-chip"
              :color="selectedCategory === 'all' ? 'primary' : 'default'"
              :variant="selectedCategory === 'all' ? 'elevated' : 'outlined'"
              @click="selectedCategory = 'all'"
            >
              All Projects
              <span class="chip-count">({{ allProjects.length }})</span>
            </v-chip>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">
            {{ selectedCategory === 'all' ? 'All Projects' : formatCategoryName(selectedCategory) }}
          </h2>

          <div
            v-for="project in filteredProjects"
            :key="project.title"
            class="item"
          >
            <h3 class="item-title">{{ project.title }}</h3>
            <div class="project-meta">
              <span v-if="project.year" class="project-year">{{ project.year }}</span>
              <span v-if="project.category" class="project-category">
                {{ formatCategoryName(project.category) }}
              </span>
            </div>
            <p>{{ project.description }}</p>
            <p class="item-meta">{{ project.technologies.join(', ') }}</p>
            <a
              v-if="project.url"
              class="external-link"
              :href="project.url"
              target="_blank"
            >
              {{ project.url.replace(/https?:\/\//, '') }}
            </a>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { usePortfolio } from '@/composables/usePortfolio';

const { pages, allProjects, getProjectsByCategory } = usePortfolio();

const selectedCategory = ref('work');

const projectCategories = computed(() => {
  const categories = [...new Set(allProjects.value
    .map(p => p.category)
    .filter((category): category is string => !!category),
  )];
  return categories.sort();
});

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return allProjects.value;
  }
  return getProjectsByCategory(selectedCategory.value);
});

const formatCategoryName = (category: string) => {
  const categoryMap: Record<string, string> = {
    'work': 'Professional Work',
    'academic': 'Academic Projects',
    'ml': 'Machine Learning',
    'mobile': 'Mobile Apps',
    'games': 'Games',
    'iot': 'IoT & Hardware',
    'web': 'Web Development',
    '3d': '3D Art & Modeling',
    'desktop': 'Desktop Applications',
    'showcase': 'Project Showcase',
  };
  return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
};
</script>

<style scoped>
@import '@/styles/pages.css';

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.filter-chip {
  cursor: pointer;
  transition: all 0.2s ease;
}

.chip-count {
  margin-left: 4px;
  font-size: 0.85em;
  opacity: 0.8;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface-variant));
}

.project-year {
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.8rem;
}

.project-category {
  background: rgba(var(--v-theme-secondary), 0.1);
  color: rgb(var(--v-theme-secondary));
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.8rem;
}

@media (max-width: 600px) {
  .filter-chips {
    justify-content: center;
  }

  .project-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
