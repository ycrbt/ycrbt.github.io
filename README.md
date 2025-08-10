# Jaime's Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This static website showcases Jaime's projects across different categories with an intuitive tabbed navigation system.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Tab Navigation**: Easy navigation between different project categories
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Touch Support**: Swipe gestures for mobile devices
- **Performance Optimized**: Smooth animations and efficient rendering

## Project Structure

```
PortfolioJaime/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and interactions
└── README.md           # This file
```

## Quick Start

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your needs

## Customization Guide

### 1. Personal Information

Edit the header section in `index.html`:

```html
<div class="bio">
    <h1>Your Name</h1>
    <p class="title">Your Title</p>
    <p class="bio-text">Your bio description...</p>
    <div class="social-links">
        <a href="your-linkedin-url" class="social-link">LinkedIn</a>
        <a href="your-github-url" class="social-link">GitHub</a>
        <a href="mailto:your-email" class="social-link">Email</a>
    </div>
</div>
```

### 2. Profile Picture

Replace the placeholder image URL in `index.html`:

```html
<img src="path/to/your/photo.jpg" alt="Your Name" id="profile-pic">
```

### 3. Project Categories

Modify the tab navigation in `index.html`:

```html
<div class="tab-navigation">
    <button class="tab-button active" data-tab="category-1">Category 1</button>
    <button class="tab-button" data-tab="category-2">Category 2</button>
    <!-- Add more categories as needed -->
</div>
```

### 4. Project Content

Update the project cards in each tab section:

```html
<div class="tab-pane active" id="category-1">
    <div class="projects-grid">
        <div class="project-card">
            <div class="project-image">
                <img src="path/to/project-image.jpg" alt="Project Name">
            </div>
            <div class="project-info">
                <h3>Project Name</h3>
                <p>Project description...</p>
                <div class="project-tags">
                    <span class="tag">Technology 1</span>
                    <span class="tag">Technology 2</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

### 5. Styling

Customize colors and fonts in `styles.css`:

```css
/* Change the header gradient */
.header {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}

/* Update the primary color scheme */
.tab-button.active {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Images load with smooth fade-in animations
- **Optimized Animations**: 60fps smooth transitions
- **Touch Gestures**: Swipe navigation on mobile devices
- **Keyboard Navigation**: Arrow keys for tab switching
- **Responsive Images**: Automatically scaled for different screen sizes

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Indicators**: Clear focus states for keyboard users
- **Screen Reader Support**: Semantic HTML structure
- **High Contrast**: Readable text and clear visual hierarchy

## Customization Examples

### Adding a New Project Category

1. Add a new tab button:
```html
<button class="tab-button" data-tab="new-category">New Category</button>
```

2. Create the corresponding tab content:
```html
<div class="tab-pane" id="new-category">
    <div class="projects-grid">
        <!-- Your projects here -->
    </div>
</div>
```

### Changing the Color Scheme

Update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f59e0b;
    --text-color: #1e293b;
    --background-color: #f8fafc;
}
```

### Adding Project Links

Enhance project cards with clickable links:

```html
<div class="project-card">
    <a href="project-url" target="_blank" class="project-link">
        <!-- Project content -->
    </a>
</div>
```

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your portfolio will be deployed instantly
3. Custom domain can be configured in the dashboard

### Vercel

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Automatic deployments on every push
3. Custom domain support included

## Troubleshooting

### Images Not Loading
- Check image file paths
- Ensure images are in the correct directory
- Verify image file permissions

### Tabs Not Working
- Check browser console for JavaScript errors
- Ensure all tab IDs match their corresponding data-tab attributes
- Verify that script.js is properly linked

### Styling Issues
- Clear browser cache
- Check CSS file path in HTML
- Verify CSS syntax with a validator

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve this portfolio template.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio, check the customization guide above or open an issue in the repository.

---

**Happy coding! 🚀**
