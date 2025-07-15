import fs from 'node:fs';
import path from 'node:path';
import type { PortfolioData } from '../src/types/portfolio.js';

const dataPath = path.join(process.cwd(), 'src/data/portfolio.json');

try {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8')) as PortfolioData;

  console.log('✅ Portfolio data validation results:');
  console.log(`📝 Personal info: ${data.personal.name} - ${data.personal.title}`);
  console.log(`🛠️  Skills categories: ${Object.keys(data.skills).length}`);
  console.log(`🚀 Projects: ${data.projects.length} (Featured: ${data.projects.filter(p => p.featured).length})`);
  console.log(`💼 Work experience entries: ${data.workExperience.length}`);
  console.log(`🎓 Education entries: ${data.education.length}`);

  // Validate required fields
  const errors: string[] = [];

  if (!data.personal.name) {
    errors.push('Personal name is required');
  }
  if (!data.personal.email) {
    errors.push('Personal email is required');
  }
  if (Object.keys(data.skills).length === 0) {
    errors.push('At least one skill category is required');
  }

  if (errors.length > 0) {
    console.log('\n❌ Validation errors:');
    for (const error of errors) {
      console.log(`  - ${error}`);
    }
    throw new Error('Validation failed');
  } else {
    console.log('\n✅ All validations passed!');
  }
} catch (error) {
  console.error('❌ Error reading or parsing portfolio data:', error);
  throw error;
}
