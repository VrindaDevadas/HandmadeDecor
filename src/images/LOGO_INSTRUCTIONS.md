# Logo Instructions

## Current Implementation

The header now displays a logo instead of the "Haven & Hearth" text. Currently using `logo-2.svg` as a placeholder.

## To Add Your Custom Logo

### Option 1: Replace the SVG file

1. Replace `homedecor/src/logo-2.svg` with your custom logo
2. Keep the same filename: `logo-2.svg`
3. The logo will automatically update

### Option 2: Use a PNG file

1. Add your logo as `homedecor/src/logo-2.png`
2. Update the import in `homedecor/src/components/Navigation.js`:
   - Change: `import logo2 from "../logo-2.svg";`
   - To: `import logo2 from "../logo-2.png";`

### Recommended Logo Specifications:

- **Format**: SVG (preferred) or PNG with transparent background
- **Dimensions**: 150px wide x 60px tall (or proportional)
- **File size**: Under 100KB for optimal performance
- **Background**: Transparent or matching the navigation color (#4a5d25)

### Current Styling:

- The logo is responsive across all device sizes
- Desktop: 60px height, max-width 150px
- Tablet: 50px height, max-width 120px
- Mobile: 40px height, max-width 100px

The logo includes proper alt text for accessibility and uses CSS object-fit for optimal display.
