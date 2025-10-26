import { Heart } from 'lucide-react';

export default function HelpMateLogo({ className = "w-10 h-10" }: { className?: string }) {
  return <Heart className={className} fill="white" strokeWidth={0} />;
}