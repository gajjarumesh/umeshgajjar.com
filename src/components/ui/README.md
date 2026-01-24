# UI Components Library

A collection of reusable, accessible, and beautifully designed UI components built with React, Tailwind CSS, and Framer Motion.

## Installation

All components are already set up in this project. Simply import them:

```javascript
import { Button, Card, Badge, Input, Textarea, Select } from '@/components/ui';
```

## Components

### Button

A versatile button component with multiple variants, sizes, and states.

**Features:**
- 3 variants: `primary`, `secondary`, `ghost`
- 3 sizes: `sm`, `md`, `lg`
- Loading state with spinner
- Icon support (left/right)
- Framer Motion hover/tap animations
- Disabled state

**Props:**
- `variant`: `'primary' | 'secondary' | 'ghost'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `leftIcon`: React node for left icon
- `rightIcon`: React node for right icon
- `isLoading`: boolean for loading state
- `disabled`: boolean for disabled state
- `onClick`: click handler function
- `className`: additional CSS classes

**Example:**
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

---

### Card

A flexible card component with glassmorphism and gradient border options.

**Features:**
- Glass morphism effect
- Gradient border option
- Hover animations with Framer Motion
- Multiple padding variants
- Responsive design

**Props:**
- `glassmorphism`: boolean to enable glass effect (default: `false`)
- `padding`: `'none' | 'sm' | 'md' | 'lg'` (default: `'md'`)
- `gradientBorder`: boolean to enable gradient border (default: `false`)
- `hover`: boolean to enable hover animation (default: `true`)
- `className`: additional CSS classes

**Example:**
```jsx
<Card glassmorphism gradientBorder padding="lg">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

---

### Badge

A badge component for displaying tech stack, tags, and labels.

**Features:**
- 5 color variants: `blue`, `purple`, `pink`, `teal`, `gray`
- Optional icon support
- Rounded design
- Hover effects

**Props:**
- `color`: `'blue' | 'purple' | 'pink' | 'teal' | 'gray'` (default: `'blue'`)
- `icon`: React node for icon
- `className`: additional CSS classes

**Example:**
```jsx
<Badge color="purple">React</Badge>
<Badge color="blue" icon={<CheckIcon />}>Verified</Badge>
```

---

### Input

A fully-featured input component with validation and icon support.

**Features:**
- Label (regular or floating)
- Error state with message
- Left/right icon support
- Validation styling
- Focus states with purple ring
- Accessible (ARIA labels)

**Props:**
- `label`: string for input label
- `type`: input type (default: `'text'`)
- `value`: input value
- `onChange`: change handler function
- `error`: error message string
- `floatingLabel`: boolean for floating label (default: `false`)
- `leftIcon`: React node for left icon
- `rightIcon`: React node for right icon
- `placeholder`: placeholder text
- `required`: boolean for required field
- `className`: additional CSS classes

**Example:**
```jsx
<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  required
/>
```

---

### Textarea

A textarea component with auto-resize and character count features.

**Features:**
- Label
- Error state with message
- Character count display
- Auto-resize option
- Maximum length validation
- Validation styling

**Props:**
- `label`: string for textarea label
- `value`: textarea value
- `onChange`: change handler function
- `error`: error message string
- `showCharCount`: boolean to show character count (default: `false`)
- `maxLength`: maximum character limit
- `autoResize`: boolean for auto-resize (default: `false`)
- `rows`: initial number of rows (default: `4`)
- `placeholder`: placeholder text
- `required`: boolean for required field
- `className`: additional CSS classes

**Example:**
```jsx
<Textarea
  label="Message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  maxLength={500}
  showCharCount
  autoResize
/>
```

---

### Select

A styled dropdown select component matching the design system.

**Features:**
- Label
- Error state with message
- Custom dropdown arrow
- Placeholder support
- Validation styling
- Focus states with purple ring

**Props:**
- `label`: string for select label
- `value`: selected value
- `onChange`: change handler function
- `options`: array of `{value, label}` objects
- `error`: error message string
- `placeholder`: placeholder text (default: `'Select an option'`)
- `required`: boolean for required field
- `className`: additional CSS classes

**Example:**
```jsx
<Select
  label="Country"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
  ]}
  required
/>
```

---

## Design System

All components follow the gradient blue/purple/pink theme:

- **Primary Gradient**: `from-blue-500 via-purple-500 to-pink-500`
- **Focus Ring**: Purple (`ring-purple-500`)
- **Error State**: Red (`border-red-500`, `text-red-500`)
- **Glass Effect**: Uses CSS variables from `globals.css`

## Accessibility

All components are built with accessibility in mind:
- Proper ARIA labels
- Error messages linked to inputs
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## Animations

Components use Framer Motion for smooth animations:
- Button: hover scale and tap effects
- Card: hover lift effect
- All transitions are optimized for performance

## Responsive Design

All components are fully responsive and work across:
- Mobile devices
- Tablets
- Desktop screens

## Examples

See `EXAMPLES.js` for detailed usage examples of all components.

## Custom Styling

All components accept a `className` prop for additional Tailwind CSS classes:

```jsx
<Button className="mt-4 w-full" variant="primary">
  Full Width Button
</Button>
```

## TypeScript

While the components are written in JavaScript, they include PropTypes validation. You can easily convert them to TypeScript by:
1. Renaming `.js` to `.tsx`
2. Replacing PropTypes with proper TypeScript interfaces
3. Adding type annotations

## Contributing

When creating new components:
1. Follow the existing patterns
2. Use Tailwind CSS for styling
3. Add Framer Motion for animations
4. Include PropTypes validation
5. Make components accessible
6. Add usage examples
