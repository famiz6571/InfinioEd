// src/data/blogs.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML/Tailwind content
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding React 18 Features",
    excerpt:
      "React 18 introduced new features like concurrent mode and automatic batching...",
    content: `
      <p class="mb-4">React 18 introduced new features like <strong>concurrent mode</strong> and automatic batching, which improve performance and developer experience.</p>
      <p class="mb-4">You can now use <code>startTransition</code> to mark non-urgent updates and keep your UI responsive.</p>
    `,
    date: "Dec 10, 2025",
  },
  {
    id: "2",
    title: "Tailwind CSS Tips and Tricks",
    excerpt:
      "Learn how to make your layouts more responsive and visually appealing using Tailwind CSS...",
    content: `
      <p class="mb-4">Tailwind CSS allows you to rapidly build responsive layouts using utility classes.</p>
      <ul class="list-disc list-inside mb-4">
        <li>Use <code>sm:</code>, <code>md:</code> for breakpoints</li>
        <li>Leverage <code>space-x-4</code> and <code>space-y-2</code> for consistent spacing</li>
        <li>Dark mode support is built-in with <code>dark:</code> prefix</li>
      </ul>
    `,
    date: "Dec 12, 2025",
  },
  {
    id: "3",
    title: "Building Modern Web Apps with React and TypeScript",
    excerpt:
      "TypeScript adds strong typing to your React apps, making them more maintainable and less error-prone...",
    content: `
      <p class="mb-4">Using TypeScript in React projects provides type safety and better code intelligence.</p>
      <p class="mb-4">You can define props and state types to avoid runtime errors and improve maintainability.</p>
    `,
    date: "Dec 15, 2025",
  },
  {
    id: "4",
    title: "State Management in React",
    excerpt:
      "Learn about different ways to manage state in React apps including Redux, Zustand, and Context API...",
    content: `
      <p class="mb-4">State management is key to building scalable React apps.</p>
      <p class="mb-4">Popular solutions:</p>
      <ul class="list-disc list-inside">
        <li>Redux / Redux Toolkit</li>
        <li>Zustand</li>
        <li>React Context API</li>
      </ul>
    `,
    date: "Dec 18, 2025",
  },
  {
    id: "5",
    title: "Optimizing React Performance",
    excerpt:
      "Techniques for improving performance in React apps including memoization, lazy loading, and code splitting...",
    content: `
      <p class="mb-4">React apps can become slow if not optimized.</p>
      <ul class="list-disc list-inside">
        <li>Use <code>React.memo</code> to prevent unnecessary re-renders</li>
        <li>Code-split with <code>React.lazy</code> and <code>Suspense</code></li>
        <li>Debounce heavy computations or expensive API calls</li>
      </ul>
    `,
    date: "Dec 20, 2025",
  },
  {
    id: "6",
    title: "Introduction to Next.js 14",
    excerpt:
      "Next.js 14 brings new features like server components and enhanced routing for React apps...",
    content: `
      <p class="mb-4">Next.js 14 introduces server components, incremental static regeneration, and improved routing.</p>
      <p class="mb-4">This allows for faster page loads and better SEO for React apps.</p>
    `,
    date: "Dec 22, 2025",
  },
];
