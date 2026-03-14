/**
 * TypeScript Interfaces for VidForge AI Video Models Directory
 */

// ===========================================
// Core Data Interfaces
// ===========================================

export interface AIVideoModel {
  id: string;
  name: string;
  company: string;
  description: string;
  fullDescription: string;
  website: string;
  pricingTier: 'free' | 'freemium' | 'paid';
  categories: string[];
  features: string[];
  // Image & Video Data
  imageUrl: string;
  videoUrl?: string;
  exampleOutputs?: string[];
  // Stats & Metadata
  stats: {
    maxDuration: string;
    resolution: string;
    rating: number;
    launchYear: number;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  useCases: string[];
  futureImpact: string[];
}

export interface FuturePrediction {
  year: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high' | 'revolutionary';
}

// ===========================================
// Filter Types
// ===========================================

export type CategoryFilter = 'all' | 'text-to-video' | 'image-to-video' | 'animation' | 'video-to-video';

// ===========================================
// Component Props Types
// ===========================================

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}
