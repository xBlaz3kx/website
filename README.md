# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This single-page application
showcases my professional experience, skills, and projects as a Backend Software Engineer.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Single Page Application**: Fast navigation between sections without page reloads
- **TypeScript**: Full type safety for better development experience
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **GitHub Pages Deployment**: Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, CSS3
- **Deployment**: GitHub Pages, GitHub Actions
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/xBlaz3kx/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_EMAIL=your-email@example.com
   ```

## 🚀 Development

### Available Scripts

- **`npm start`** - Runs the app in development mode
    - Open [http://localhost:3000](http://localhost:3000) to view it in the browser
    - The page will reload automatically when you make changes
    - You'll see any lint errors in the console

- **`npm test`** - Launches the test runner in interactive watch mode
    - See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
      information

- **`npm run build`** - Builds the app for production
    - Creates optimized production build in the `build` folder
    - Correctly bundles React in production mode
    - Optimizes the build for the best performance
    - Minifies files and includes hashes in filenames

## 🌐 Deployment

This React app is automatically deployed to GitHub Pages using GitHub Actions.

### Live Site

The app is deployed to: [https://portfolio.blazdular.cc](https://portfolio.blazdular.cc)

### Environment Variables

The following environment variables need to be set in GitHub repository settings:

- `REACT_APP_EMAIL`: Email address for contact information

### Deployment Process

1. **Automatic Deployment**: Push to `master` branch triggers automatic deployment
2. **Preview Deployments**: Pull requests create preview deployments for testing
3. **Build Process**:
    - Installs dependencies with `npm ci`
    - Builds the React app with `npm run build`
    - Uploads build artifacts to GitHub Pages
4. **Custom Domain**: Configured for `portfolio.blazdular.cc`

## 📁 Project Structure

```
website/
├── public/                 # Static files
│   ├── index.html         # Main HTML template
│   ├── 404.html           # SPA routing for GitHub Pages
│   ├── CNAME              # Custom domain configuration
│   └── ...                # Other static assets
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── About.tsx      # About section component
│   │   ├── Resume.tsx     # Resume section component
│   │   ├── Portfolio.tsx  # Portfolio section component
│   │   ├── ContactInfo.tsx # Contact information component
│   │   └── SocialLinks.tsx # Social media links component
│   ├── App.tsx            # Main application component
│   ├── App.css            # Application styles
│   └── index.tsx          # Application entry point
├── .github/workflows/     # GitHub Actions workflows
│   └── deploy.yaml        # Deployment workflow
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`.

### TypeScript

TypeScript configuration is in `tsconfig.json` with strict type checking enabled.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request