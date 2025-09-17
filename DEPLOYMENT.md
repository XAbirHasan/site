# Deployment Guide

## Quick Setup for GitHub Pages

1. **Fork this repository** to your GitHub account

2. **Update your data** in `vuetify/src/data/portfolio.json`

3. **Update repository name** (if different from "site") in `vuetify/vite.config.mts`:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```

4. **Enable GitHub Pages**:
   - Go to your repository **Settings**
   - Navigate to **Pages** section 
   - Set **Source** to "GitHub Actions"

5. **Deploy**: Push to main/master branch - GitHub Actions will automatically build and deploy!

## Your site will be available at:
`https://your-username.github.io/your-repo-name/`

## Troubleshooting

- **Build fails**: Check that all dependencies are properly installed
- **404 errors**: Verify the base path in `vite.config.mts` matches your repository name
- **GitHub Pages not enabled**: Make sure to enable GitHub Pages in repository settings

## Local Development

```bash
cd vuetify
npm install
npm run dev
```

## Support

Need help? Contact [abirhassanalrabbi4005@gmail.com](mailto:abirhassanalrabbi4005@gmail.com)
