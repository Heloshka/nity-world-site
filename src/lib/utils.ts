import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'Just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function getNeonColorClass(color: string): string {
  switch (color) {
    case 'neon-cyan':
      return 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10';
    case 'neon-green':
      return 'text-green-400 border-green-400/30 bg-green-400/10';
    case 'neon-purple':
      return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
    case 'neon-blue':
      return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
    case 'neon-amber':
      return 'text-amber-400 border-amber-400/30 bg-amber-400/10';
    default:
      return 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10';
  }
}
