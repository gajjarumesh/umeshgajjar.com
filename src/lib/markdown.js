import matter from 'gray-matter';

/**
 * Parse markdown content with frontmatter
 */
export function parseMarkdown(content) {
  const { data, content: markdownContent } = matter(content);
  return {
    frontmatter: data,
    content: markdownContent,
  };
}

/**
 * Estimate reading time in minutes
 */
export function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

/**
 * Generate slug from title
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Extract headings from markdown for table of contents
 */
export function extractHeadings(content) {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const slug = generateSlug(text);
    
    headings.push({
      level,
      text,
      slug,
    });
  }

  return headings;
}

/**
 * Truncate text to specified length
 */
export function truncate(text, length = 160) {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}
