# My Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

## ✨ Features

- ⚡ **Vite** for lightning-fast development and optimized builds
- ⚙️ **React 18** with functional components and hooks
- 🎨 **Tailwind CSS** for beautiful, utility-first styling
- 📱 **Fully responsive** design
- 🚀 **Optimized** for production
- 🔍 **SEO-friendly** structure

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm (or yarn/pnpm)

### Installation

```bash
cd my-portfolio
npm install
```

### Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customize Your Portfolio

1. **Update your name & bio** in `src/App.jsx`
2. **Add your projects** — edit the project cards in the Projects section
3. **Add a profile image** — place it in `public/` and update the avatar div
4. **Update contact links** — replace placeholder URLs in the Contact section
5. **Modify colors** — edit `tailwind.config.js` theme section
6. **Update meta tags** — edit `index.html` for SEO

## �� Project Structure

```
my-portfolio/
├── index.html          # HTML entry point
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind customization
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.jsx        # React entry
│   ├── App.jsx         # Main component
│   └── index.css       # Global styles + Tailwind directives
└── public/             # Static assets
```

## 🚀 Deploy

### Vercel (Recommended)

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Select "Vite" as the framework
4. Deploy!

### Netlify

```bash
npm run build
# Drag & drop the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push the dist/ folder to gh-pages branch
```

## 📚 Learn More

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## �� License

MIT — Feel free to use this as a template.

---

**Happy coding! 🎉**
