'use client';

import dynamic from 'next/dynamic';

// Dynamically import ThreeBackground to avoid SSR issues
const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
  ssr: false,
  loading: () => null,
});

export default function ThreeBackgroundWrapper() {
  return <ThreeBackground />;
}
