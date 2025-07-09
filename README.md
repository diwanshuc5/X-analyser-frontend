# Twitter Personality Analyzer

A modern React application that analyzes Twitter users' personalities and tweeting patterns using AI. Enter any Twitter username and get detailed insights about their personality type, tweeting style, top topics, sentiment patterns, and engagement behavior.

![Twitter Personality Analyzer](https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## ✨ Features

- **Real-time Analysis**: Analyze any Twitter user's last 100 tweets
- **AI-Powered Insights**: Get detailed personality analysis using LLM models
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Comprehensive Reports**: Personality type, tweeting style, topics, sentiment, and engagement patterns
- **Error Handling**: Robust error handling with user-friendly messages
- **Loading States**: Smooth loading animations during analysis

## 🚀 Tech Stack

### Core Framework
- **React 18.3.1** - Modern UI library with hooks and functional components
- **TypeScript 5.5.3** - Static type checking for better code quality
- **Vite 5.4.2** - Lightning-fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing and optimization
- **Autoprefixer 10.4.18** - Automatic vendor prefixes
- **Lucide React 0.344.0** - Beautiful SVG icons

### Code Quality
- **ESLint 9.9.1** - JavaScript/TypeScript linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **React Hooks ESLint Plugin** - React hooks best practices
- **React Refresh ESLint Plugin** - Vite compatibility

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js)
- A backend API endpoint for Twitter analysis (see Backend Requirements)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd twitter-personality-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
twitter-personality-analyzer/
├── public/                 # Static assets
├── src/
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles (Tailwind imports)
│   └── vite-env.d.ts      # Vite type definitions
├── eslint.config.js       # ESLint configuration
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # App-specific TypeScript config
├── tsconfig.node.json     # Node.js TypeScript config
└── vite.config.ts         # Vite configuration
```

## 🔧 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint for code quality checks

## 🌐 Backend Requirements

This frontend expects a backend API with the following endpoint:

### POST `/api/analyze-twitter`

**Request Body:**
```json
{
  "username": "elonmusk"
}
```

**Response Format:**
```json
{
  "personality": "Innovative and forward-thinking leader...",
  "tweetingStyle": "Direct and engaging communication...",
  "topTopics": ["Technology", "Space", "Innovation", "Business"],
  "sentimentAnalysis": "Generally positive with occasional critical observations...",
  "engagementPattern": "High engagement with frequent interactions...",
  "summary": "Overall personality summary and key insights..."
}
```

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds** - Beautiful purple-to-blue gradients
- **Animated Elements** - Subtle pulse animations and hover effects
- **Glass Morphism** - Modern card designs with shadows and blur effects
- **Responsive Design** - Mobile-first approach with breakpoints

### User Experience
- **Loading States** - Spinner animations during API calls
- **Error Handling** - Clear error messages with icons
- **Form Validation** - Real-time input validation
- **Accessibility** - Proper ARIA labels and keyboard navigation

## 🔒 Environment Variables

Create a `.env` file in the root directory if you need to configure API endpoints:

```env
VITE_API_BASE_URL=http://localhost:3000
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Configure redirects for SPA routing if needed

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🔧 Configuration

### Tailwind CSS
Customize colors, fonts, and spacing in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
}
```

### TypeScript
Strict mode is enabled by default. Modify `tsconfig.json` for different settings:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5173
   lsof -ti:5173 | xargs kill -9
   ```

2. **Module not found errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

### Performance Optimization

- **Code Splitting** - Vite automatically splits code for optimal loading
- **Tree Shaking** - Unused code is automatically removed
- **Asset Optimization** - Images and assets are optimized during build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

### Code Style

- Use TypeScript for all new files
- Follow ESLint rules (run `npm run lint`)
- Use Tailwind CSS for styling
- Write meaningful commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Vite Team** - For the fast build tool

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
