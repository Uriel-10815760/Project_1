# SpecUp IT Solutions - Design Guide

## 🎨 Visual Design System

### Color Palette

#### Primary Colors
```
Background Dark:    #0f172a (slate-900)
Background Medium:  #1e293b (slate-800)
Background Darkest: #020617 (slate-950)
```

#### Accent Colors
```
Blue Primary:   #60a5fa (blue-400)
Purple Primary: #a855f7 (purple-500)
Pink Accent:    #ec4899 (pink-500)
```

#### Text Colors
```
Primary Text:   #ffffff (white)
Secondary Text: #d1d5db (gray-300)
Tertiary Text:  #9ca3af (gray-400)
```

#### Gradients
```css
/* Primary Gradient */
from-blue-400 via-purple-500 to-pink-500

/* Background Gradients */
from-slate-900 via-purple-900 to-slate-900
from-slate-900 via-slate-800 to-slate-900
```

### Typography

#### Font Families
- **Primary**: Geist Sans (Next.js default)
- **Monospace**: Geist Mono

#### Heading Sizes
```
Hero H1:     text-5xl md:text-7xl lg:text-8xl (48-96px)
Section H2:  text-4xl md:text-5xl (36-48px)
Card H3:     text-xl (20px)
```

#### Font Weights
- **Bold**: 700 (headings)
- **Semibold**: 600 (buttons, labels)
- **Medium**: 500 (navigation)
- **Regular**: 400 (body text)

### Spacing System

#### Section Padding
```
Vertical:   py-20 (80px)
Horizontal: px-4 sm:px-6 lg:px-8
```

#### Component Spacing
```
Card Padding:    p-6 to p-8 (24-32px)
Gap Between:     gap-4 to gap-8 (16-32px)
Margin Bottom:   mb-4 to mb-16 (16-64px)
```

### Border Radius

```
Small:  rounded-lg (8px)
Medium: rounded-xl (12px)
Large:  rounded-2xl (16px)
Full:   rounded-full (9999px)
```

### Shadows & Effects

#### Box Shadows
```css
/* Hover Shadow */
hover:shadow-lg hover:shadow-purple-500/50

/* Card Shadow */
shadow-lg
```

#### Backdrop Effects
```css
/* Glassmorphism */
backdrop-blur-sm
backdrop-blur-md
bg-slate-800/50
```

### Animation Guidelines

#### Transition Durations
```
Fast:     duration-200 (200ms)
Standard: duration-300 (300ms)
Slow:     duration-500 (500ms)
```

#### Common Animations
```css
/* Hover Lift */
hover:y-[-10px]

/* Hover Scale */
hover:scale-1.05

/* Fade In */
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
```

## 📐 Layout Patterns

### Grid Systems

#### Services/Portfolio Grid
```
Mobile:  grid-cols-1
Tablet:  grid-cols-2
Desktop: grid-cols-3
```

#### Technologies Grid
```
Mobile:  grid-cols-2
Tablet:  grid-cols-3
Desktop: grid-cols-6
```

### Container Widths
```
Max Width: max-w-7xl (1280px)
Centered:  mx-auto
```

## 🎯 Component Patterns

### Card Design
```tsx
<div className="
  bg-slate-800/50 
  backdrop-blur-sm 
  p-8 
  rounded-2xl 
  border border-slate-700 
  hover:border-purple-500 
  transition-all duration-300
">
```

### Button Styles

#### Primary Button
```tsx
<button className="
  bg-gradient-to-r from-blue-500 to-purple-600 
  text-white 
  px-8 py-4 
  rounded-full 
  font-semibold 
  hover:shadow-lg hover:shadow-purple-500/50 
  transition-all duration-300
">
```

#### Secondary Button
```tsx
<button className="
  border-2 border-purple-500 
  text-white 
  px-8 py-4 
  rounded-full 
  font-semibold 
  hover:bg-purple-500/10 
  transition-all duration-300
">
```

### Input Fields
```tsx
<input className="
  w-full 
  px-4 py-3 
  bg-slate-800/50 
  border border-slate-700 
  rounded-lg 
  text-white 
  focus:outline-none 
  focus:border-purple-500 
  transition-colors duration-300
" />
```

## 🎭 Interactive States

### Hover States
- **Cards**: Lift up (y: -10px), border color change
- **Buttons**: Shadow glow, slight scale
- **Links**: Color change to purple-400
- **Icons**: Color transition, scale up

### Focus States
- **Inputs**: Border color to purple-500
- **Buttons**: Outline with purple accent

### Active States
- **Navigation**: Text color white
- **Buttons**: Slight scale down

## 📱 Responsive Breakpoints

```
sm:  640px  (Small tablets)
md:  768px  (Tablets)
lg:  1024px (Laptops)
xl:  1280px (Desktops)
2xl: 1536px (Large screens)
```

### Mobile Optimizations
- Hamburger menu for navigation
- Single column layouts
- Larger touch targets (min 44x44px)
- Reduced font sizes
- Stacked buttons

### Tablet Optimizations
- 2-column grids
- Adjusted spacing
- Medium font sizes

### Desktop Optimizations
- Multi-column layouts
- Full navigation menu
- Larger hero text
- Optimal spacing

## 🌟 Special Effects

### Gradient Text
```tsx
<span className="
  bg-gradient-to-r from-blue-400 to-purple-500 
  bg-clip-text text-transparent
">
```

### Floating Background Orbs
```tsx
<div className="
  absolute w-96 h-96 
  bg-blue-500/30 
  rounded-full 
  filter blur-3xl 
  animate-pulse
">
```

### Glassmorphism Cards
```tsx
<div className="
  bg-slate-800/50 
  backdrop-blur-sm 
  border border-slate-700
">
```

## 🎨 Icon Usage

### Icon Sizes
- **Small**: 16-20px (navigation, inline)
- **Medium**: 24-32px (features, contact)
- **Large**: 40-48px (services, technologies)

### Icon Colors
- **Default**: text-gray-400
- **Hover**: text-purple-400
- **Active**: text-blue-400

## ✨ Best Practices

1. **Consistency**: Use the same spacing, colors, and patterns throughout
2. **Accessibility**: Maintain color contrast ratios (WCAG AA)
3. **Performance**: Use Tailwind's JIT mode for optimal CSS
4. **Responsiveness**: Test on multiple devices and screen sizes
5. **Animations**: Keep animations subtle and purposeful
6. **Loading States**: Consider adding skeleton screens
7. **Error States**: Design clear error messages
8. **Empty States**: Handle empty data gracefully

## 🔧 Customization Tips

### Changing Primary Color
Replace all instances of:
- `blue-400/500` with your color
- `purple-500/600` with your secondary color

### Adjusting Spacing
Modify the `py-20` (section padding) to your preference

### Font Changes
Update `layout.tsx` to import different Google Fonts

### Dark/Light Mode
Add theme toggle and adjust color variables in `globals.css`

---

This design system ensures consistency and maintainability across the entire website.
