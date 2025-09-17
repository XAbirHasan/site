# Modern Portfolio Website

> A modern, responsive portfolio website built with Vue 3, TypeScript, and Vuetify.

## 🚀 Live Demo

Visit the live site: [https://xabirhasan.github.io/site/](https://xabirhasan.github.io/site/)

## ✨ Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Interactive Skills**: Hover tooltips and detailed proficiency levels
- **Project Showcase**: Organized by categories with featured projects
- **Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Auto Deploy**: GitHub Actions for seamless deployment

## 🛠️ Tech Stack

- **Frontend**: Vue 3, TypeScript, Vuetify
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## � Quick Setup

Want to use this portfolio template? Follow our [**Deployment Guide**](./DEPLOYMENT.md) for step-by-step instructions!

### For Developers

```bash
# Clone the repository
git clone https://github.com/XAbirHasan/site.git
cd site/vuetify

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📝 Customization

Simply update the `vuetify/src/data/portfolio.json` file with your information:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername",
    "summary": "Your professional summary..."
  },
  "skills": {
    "Programming Languages": [
      { "name": "JavaScript", "proficiency": "Expert", "level": 95 }
    ]
  },
  "workExperience": [...],
  "projects": [...],
  "education": [...]
}
```

## 📁 Project Structure

```
vuetify/
├── src/
│   ├── data/
│   │   └── portfolio.json          # 👈 Edit this file only!
│   ├── pages/                      # Vue page components
│   ├── components/                 # Reusable components
│   ├── composables/               # Vue composables
│   ├── types/                     # TypeScript definitions
│   └── styles/                    # Global styles
├── public/                        # Static assets
└── package.json
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Lint and fix
npm run lint
```

## � Documentation

- [**Deployment Guide**](./DEPLOYMENT.md) - Complete setup instructions
- [**Data Management**](./vuetify/DATA_MANAGEMENT.md) - How to update your portfolio data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙋‍♂️ Support

If you need help:

- 📧 Email: [abirhassanalrabbi4005@gmail.com](mailto:abirhassanalrabbi4005@gmail.com)
- 💼 LinkedIn: [Abir Hassan](https://linkedin.com/in/abir-hassan)
- 🐙 GitHub: [@XAbirHasan](https://github.com/XAbirHasan)

---

⭐ **Like this project?** Give it a star and share it with others!

**Built with ❤️ by [Md Abir Hassan](https://github.com/XAbirHasan)**
