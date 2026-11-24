import React from 'react';

interface FixoraLogoProps {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
  compact?: boolean;
}

export const FixoraLogo: React.FC<FixoraLogoProps> = ({
  variant = 'dark',
  showTagline = false,
  compact = false,
}) => {
  const isLightText = variant === 'light';
  const chassisStroke = isLightText ? '#FFFFFF' : '#101B35';
  const primaryText = isLightText ? 'text-white' : 'text-[#101B35]';
  const secondaryText = isLightText ? 'text-[#19D5E8]' : 'text-[#1677FF]';

  return (
    <div className="inline-flex items-center gap-2.5 select-none whitespace-nowrap shrink-0">
      <svg
        width={compact ? 32 : 38}
        height={compact ? 32 : 38}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer subtle precision frame */}
        <rect
          x="2"
          y="2"
          width="36"
          height="36"
          rx="9"
          fill={isLightText ? '#162547' : '#EEF4FF'}
          stroke={isLightText ? '#19D5E8' : '#1677FF'}
          strokeOpacity={isLightText ? '0.35' : '0.25'}
          strokeWidth="1.2"
        />
        {/* Smartphone outline */}
        <rect
          x="11"
          y="6.5"
          width="18"
          height="27"
          rx="3.5"
          stroke={chassisStroke}
          strokeWidth="2"
          fill={isLightText ? '#101B35' : '#FFFFFF'}
        />
        {/* Speaker notch */}
        <line
          x1="17.5"
          y1="9.5"
          x2="22.5"
          y2="9.5"
          stroke={isLightText ? '#19D5E8' : '#1677FF'}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Electric Blue + Cyan precision lightning bolt */}
        <path
          d="M21.4 13L15.8 20.6H19.8L18.6 27.2L24.2 19.6H20.2L21.4 13Z"
          fill="#1677FF"
        />
        <path
          d="M21.4 13L17.9 17.8L20.7 17.8L21.4 13Z"
          fill="#19D5E8"
        />
        {/* Subtle precision home indicator */}
        <line
          x1="18"
          y1="30.5"
          x2="22"
          y2="30.5"
          stroke={chassisStroke}
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-tight ${compact ? 'text-base sm:text-lg' : 'text-xl'} ${primaryText}`}>
          FIXORA <span className={secondaryText}>MOBILES</span>
        </span>
        {showTagline && (
          <span className={`mt-1 text-[11px] font-medium tracking-normal ${isLightText ? 'text-slate-300' : 'text-slate-500'}`}>
            Your Phone. Our Expertise. Your Convenience.
          </span>
        )}
      </div>
    </div>
  );
};
