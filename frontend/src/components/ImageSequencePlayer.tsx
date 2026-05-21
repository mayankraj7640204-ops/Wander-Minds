"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ImageSequencePlayerProps {
  frameCount: number;
  framePrefix: string;
  frameSuffix: string;
  className?: string;
  fps?: number;
}

export function ImageSequencePlayer({
  frameCount,
  framePrefix,
  frameSuffix,
  className = "",
  fps = 30
}: ImageSequencePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let isMounted = true;
    
    const loadImages = async () => {
      const imgArray: HTMLImageElement[] = [];
      
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const paddedIndex = String(i).padStart(3, '0');
        img.src = `${framePrefix}${paddedIndex}${frameSuffix}`;
        
        try {
          await img.decode();
        } catch (e) {
          console.warn(`Failed to decode frame ${i}`, e);
        }
        
        imgArray.push(img);
      }
      
      if (isMounted) {
        setImages(imgArray);
        setLoaded(true);
      }
    };

    loadImages();
    
    return () => {
      isMounted = false;
    };
  }, [frameCount, framePrefix, frameSuffix]);

  // Play animation loop
  useEffect(() => {
    if (!loaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false }); // alpha false optimizes for opaque images
    if (!ctx) return;

    let currentFrame = 0;
    let lastTime = performance.now();
    let animationFrameId: number;
    const frameInterval = 1000 / fps;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set actual canvas size scaled by dpr
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Scale the context to normalize coordinates
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const render = (time: number) => {
      if (time - lastTime >= frameInterval) {
        ctx.drawImage(images[currentFrame], 0, 0, rect.width, rect.height);
        
        currentFrame = (currentFrame + 1) % frameCount;
        lastTime = time - ((time - lastTime) % frameInterval);
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect();
      canvas.width = newRect.width * dpr;
      canvas.height = newRect.height * dpr;
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(images[currentFrame], 0, 0, newRect.width, newRect.height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [loaded, images, frameCount, fps]);

  return (
    <div className={`relative w-full h-full bg-gray-900 ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-gray-900">
          Loading cinematic background...
        </div>
      )}
    </div>
  );
}
