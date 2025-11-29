# Astro Starter Template for QuantCDN

A minimal Astro static site starter template configured for deployment to QuantCDN.

[![Deploy to QuantCDN](https://www.quantcdn.io/img/quant-deploy-btn-sml.svg)](https://dashboard.quantcdn.io/projects/add/jamstack?template=astro)

## Features

- **Astro** - Modern, fast static site generator with component islands
- **Automated Deployment** - GitHub Actions workflow for CI/CD
- **Quant Integration** - Pre-configured for QuantCDN deployment
- **Modern Styling** - Clean, responsive design out of the box

## Quick Start

1. Clone this repository
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`
4. Visit `http://localhost:4321`

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automated deployment workflow
├── src/
│   ├── layouts/            # Page layouts
│   ├── pages/              # Your pages (routes)
│   └── styles/             # Global styles
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
├── package.json
└── README.md
```

## Deployment

This template includes a GitHub Actions workflow that automatically:
1. Builds your Astro site on every push to `main`
2. Deploys the generated static files to QuantCDN
3. Purges the CDN cache for instant updates

### Environment Variables

The following secrets are automatically configured by Quant:
- `QUANT_CUSTOMER` - Your Quant customer ID
- `QUANT_PROJECT` - Your Quant project ID
- `QUANT_TOKEN` - Your Quant API token

## Customization

### Site Configuration

Edit `astro.config.mjs` to customize your site:

```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  // Add your customizations here
});
```

### Adding Content

Create new pages in `src/pages/`:
```bash
touch src/pages/about.astro
```

### Styling

Add custom CSS in `src/styles/global.css` or use scoped styles in your components.

## Learn More

- [Astro Documentation](https://docs.astro.build/)
- [Quant Documentation](https://docs.quantcdn.io/)
