import React from 'react';
import { X } from 'lucide-react';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoVideoModal({ isOpen, onClose }: DemoVideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
      >
        <X size={32} />
      </button>
      
      <div className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative">
        <video 
          src="/demo-video.mov" 
          autoPlay 
          controls 
          className="w-full h-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
