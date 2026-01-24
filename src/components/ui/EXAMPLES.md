# UI Components Usage Examples

This file contains example code snippets for documentation purposes.

## Import Components

```javascript
import { Button, Card, Badge, Input, Textarea, Select } from '@/components/ui';
```

---

## Button Examples

### Primary button with left icon

```jsx
<Button variant="primary" size="md" leftIcon={<Icon />}>
  Click Me
</Button>
```

### Secondary button

```jsx
<Button variant="secondary" size="lg">
  Secondary Action
</Button>
```

### Ghost button with loading state

```jsx
<Button variant="ghost" size="sm" isLoading>
  Loading...
</Button>
```

### Button with right icon

```jsx
<Button variant="primary" rightIcon={<ArrowIcon />}>
  Next Step
</Button>
```

---

## Card Examples

### Basic card

```jsx
<Card padding="md">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### Glass morphism card with gradient border

```jsx
<Card glassmorphism gradientBorder padding="lg">
  <h3>Premium Feature</h3>
  <p>Special content</p>
</Card>
```

### Card with no hover effect

```jsx
<Card hover={false} padding="sm">
  Static content
</Card>
```

---

## Badge Examples

### Tech stack badges

```jsx
<Badge color="blue">React</Badge>
<Badge color="purple">Next.js</Badge>
<Badge color="teal">Tailwind</Badge>
<Badge color="pink">TypeScript</Badge>
```

### Badge with icon

```jsx
<Badge color="blue" icon={<CheckIcon />}>
  Verified
</Badge>
```

---

## Input Examples

### Basic input with label

```jsx
<Input
  label="Email"
  type="email"
  name="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  required
/>
```

### Input with floating label

```jsx
<Input
  label="Username"
  name="username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  floatingLabel
  required
/>
```

### Input with icons

```jsx
<Input
  label="Search"
  name="search"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  leftIcon={<SearchIcon />}
  rightIcon={<ClearIcon onClick={clearSearch} />}
/>
```

### Input with error

```jsx
<Input
  label="Password"
  type="password"
  name="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  error="Password must be at least 8 characters"
/>
```

---

## Textarea Examples

### Basic textarea

```jsx
<Textarea
  label="Message"
  name="message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Enter your message"
  rows={4}
/>
```

### Textarea with character count

```jsx
<Textarea
  label="Bio"
  name="bio"
  value={bio}
  onChange={(e) => setBio(e.target.value)}
  maxLength={500}
  showCharCount
/>
```

### Auto-resize textarea

```jsx
<Textarea
  label="Description"
  name="description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  autoResize
  rows={3}
/>
```

### Textarea with error

```jsx
<Textarea
  label="Comments"
  name="comments"
  value={comments}
  onChange={(e) => setComments(e.target.value)}
  error="This field is required"
/>
```

---

## Select Examples

### Basic select

```jsx
<Select
  label="Country"
  name="country"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ]}
  placeholder="Select your country"
/>
```

### Required select with error

```jsx
<Select
  label="Category"
  name="category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  options={categoryOptions}
  error="Please select a category"
  required
/>
```

---

## Complete Form Example

```jsx
import { Button, Input, Textarea, Select } from '@/components/ui';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      
      <Select
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        options={[
          { value: 'general', label: 'General Inquiry' },
          { value: 'support', label: 'Support' },
          { value: 'business', label: 'Business' },
        ]}
        required
      />
      
      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        maxLength={1000}
        showCharCount
        rows={5}
        required
      />
      
      <Button type="submit" variant="primary" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
```
