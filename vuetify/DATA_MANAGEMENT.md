# Portfolio Data Management

This project uses a structured data management system that follows Vue.js and TypeScript best practices. All portfolio content is stored in JSON files and managed through a reactive data layer. The Editor page remains static as it represents a separate tool feature.

## 📁 File Structure

```
src/
├── data/
│   └── portfolio.json          # Main data file containing all portfolio content
├── types/
│   └── portfolio.ts           # TypeScript interfaces for type safety
├── composables/
│   └── usePortfolio.ts        # Vue composable for data management
└── pages/
    ├── Index.vue              # Homepage using dynamic data
    ├── About.vue              # About page using dynamic data
    ├── Work.vue               # Work page using dynamic data
    └── Editor.vue             # Static editor tool page
```

## 🔧 How to Update Content

### 1. Personal Information
Edit the `personal` section in `src/data/portfolio.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "location": "Your City, Country",
    "timezone": "Your/Timezone",
    "timezoneDisplay": "GMT+X",
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername",
    "summary": "Your professional summary for homepage...",
    "aboutSummary": "More detailed summary for about page..."
  }
}
```

**Note**: The `timezone` should be a valid IANA timezone identifier (e.g., "Asia/Dhaka", "America/New_York", "Europe/London"). The live clock on the homepage will automatically update based on this timezone.

### 2. Skills
Update the `skills` object with categories and arrays of skills:

```json
{
  "skills": {
    "Programming Languages": ["JavaScript", "TypeScript", "Python"],
    "Frontend": ["Vue.js", "React", "Angular"],
    "Backend": ["Node.js", "Express.js", "Nest.js"]
  }
}
```

### 3. Projects
Add or modify projects in the `projects` array:

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description...",
      "technologies": ["Vue.js", "TypeScript", "AWS"],
      "url": "https://example.com",
      "featured": true,
      "category": "work"
    }
  ]
}
```

### 4. Work Experience
Update your work history in the `workExperience` array:

```json
{
  "workExperience": [
    {
      "company": "Company Name",
      "position": "Job Title",
      "subtitle": "Additional info (optional)",
      "location": "City, Country",
      "period": "Jan 2020 – Present",
      "description": "Brief description...",
      "achievements": ["Achievement 1", "Achievement 2"]
    }
  ]
}
```

### 5. Education
Update education history:

```json
{
  "education": [
    {
      "institution": "University Name",
      "degree": "Degree Name",
      "location": "City, Country",
      "graduationDate": "Month Year",
      "gpa": "X.XX"
    }
  ]
}
```

### 6. Research (Optional)
Add research publications or projects:

```json
{
  "research": [
    {
      "title": "Research Title",
      "status": "Published/Not published",
      "url": "https://doi.org/..."
    }
  ]
}
```

### 7. Page Content
Update page-specific content:

```json
{
  "pages": {
    "work": {
      "title": "Work",
      "subtitle": "Brief description of your work philosophy..."
    }
  }
}
```

## 🎯 Benefits of This Approach

1. **Single Source of Truth**: All data is centralized in one JSON file
2. **Type Safety**: TypeScript interfaces ensure data consistency
3. **Reactive Updates**: Changes to the JSON file automatically update the UI
4. **Easy Maintenance**: No need to edit multiple Vue components
5. **Scalability**: Easy to add new data fields and sections
6. **Industry Standard**: Follows modern Vue.js and TypeScript practices
7. **Selective Updates**: Only portfolio pages are dynamic; editor remains static

## 🚀 Usage in Components

Use the `usePortfolio` composable in any Vue component:

```vue
<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio';

const { personal, skills, workExperience } = usePortfolio();
</script>

<template>
  <div>
    <h1>{{ personal.name }}</h1>
    <p>{{ personal.aboutSummary }}</p>
  </div>
</template>
```

## 📝 Available Composable Methods

- `personal` - Personal information
- `skills` - Skills object with categories
- `projects` - All projects array
- `workExperience` - Work history array
- `education` - Education history array
- `research` - Research publications array
- `pages` - Page-specific content
- `skillCategories` - Array of skill category names
- `getSkillsByCategory(category)` - Get skills for a specific category
- `featuredProjects` - Only projects marked as featured
- `workProjects` - Projects categorized as work
- `allProjects` - All projects regardless of category

## 🔄 Adding New Data Sections

1. Add new section to `portfolio.json`
2. Update TypeScript interfaces in `types/portfolio.ts`
3. Add computed properties to `composables/usePortfolio.ts`
4. Use in components as needed

## 📄 Static vs Dynamic Pages

- **Dynamic Pages**: Index, About, Work - content managed through `portfolio.json`
- **Static Pages**: Editor - remains static as it's a tool/feature page, not portfolio content

## ✅ Data Validation

Run `npm run validate-data` to ensure your portfolio data structure is correct and all required fields are present.

This system ensures your portfolio is maintainable, type-safe, and follows modern development best practices while keeping functional pages separate from portfolio content.
