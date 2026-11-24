import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'FIXORA MOBILES Care Studio',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#101B35] via-[#16274E] to-[#1677FF]/40 text-white p-8 text-center ${className}`}
      >
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-3">
          <Smartphone className="w-7 h-7 text-[#19D5E8]" aria-hidden="true" />
        </div>
        <p className="font-display font-semibold text-base tracking-tight">{fallbackTitle}</p>
        <p className="mt-1 text-xs text-slate-300 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
