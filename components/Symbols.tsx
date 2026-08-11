type SymbolProps = {
  className?: string;
};

export function SunMark({ className = "" }: SymbolProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M32 4v12M32 48v12M4 32h12M48 32h12M12.2 12.2l8.5 8.5M43.3 43.3l8.5 8.5M51.8 12.2l-8.5 8.5M20.7 43.3l-8.5 8.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M27 27c4 2 6 2 10 0M27 37c4-2 6-2 10 0" fill="none" stroke="currentColor" strokeWidth="1.1" opacity=".75" />
    </svg>
  );
}

export function WaterMark({ className = "" }: SymbolProps) {
  return (
    <svg className={className} viewBox="0 0 72 48" aria-hidden="true">
      <circle cx="36" cy="14" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M36 1v6M25 4l4 5M47 4l-4 5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 30c7-6 13-6 20 0s13 6 20 0 13-6 20 0M6 39c7-6 13-6 20 0s13 6 20 0 13-6 20 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CowrieMark({ className = "" }: SymbolProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 7C18 7 10 19 10 32s8 25 22 25 22-12 22-25S46 7 32 7Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M32 15c-7 7-8 27 0 34M32 15c7 7 8 27 0 34" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M26 20c4 2 8 2 12 0M25 27c5 2 9 2 14 0M25 35c5-2 9-2 14 0M26 43c4-2 8-2 12 0" fill="none" stroke="currentColor" strokeWidth="1" opacity=".65" />
    </svg>
  );
}
