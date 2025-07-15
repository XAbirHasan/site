import { computed, ref } from 'vue';
import type { PortfolioData } from '@/types/portfolio';
import portfolioData from '@/data/portfolio.json';

export const usePortfolio = () => {
  const data = ref<PortfolioData>(portfolioData as PortfolioData);

  const personal = computed(() => data.value.personal);
  const skills = computed(() => data.value.skills);
  const projects = computed(() => data.value.projects);
  const workExperience = computed(() => data.value.workExperience);
  const education = computed(() => data.value.education);
  const research = computed(() => data.value.research);
  const pages = computed(() => data.value.pages);

  const skillCategories = computed(() => Object.keys(data.value.skills));

  const getSkillsByCategory = (category: string) => {
    return data.value.skills[category] || [];
  };

  const featuredProjects = computed(() =>
    data.value.projects.filter(project => project.featured),
  );

  const workProjects = computed(() =>
    data.value.projects.filter(project => project.category === 'work'),
  );

  const allProjects = computed(() => data.value.projects);

  return {
    data,
    personal,
    skills,
    projects,
    workExperience,
    education,
    research,
    pages,
    skillCategories,
    getSkillsByCategory,
    featuredProjects,
    workProjects,
    allProjects,
  };
};
