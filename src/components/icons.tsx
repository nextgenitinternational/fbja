export function RoleIcon({ className = "h-4 w-4 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="3" fill="currentColor" />
      <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" fill="currentColor" />
    </svg>
  );
}

export function MicIcon({ className = "h-4 w-4 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" />
      <path
        d="M6 11a6 6 0 0 0 12 0M12 17v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className = "h-4 w-4 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GlobeIcon({ className = "h-4 w-4 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4 12h16M12 4c2.5 2.3 3.8 5 3.8 8s-1.3 5.7-3.8 8c-2.5-2.3-3.8-5-3.8-8s1.3-5.7 3.8-8z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function PinIcon({ className = "h-4 w-4 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"
        fill="currentColor"
      />
      <circle cx="12" cy="9.5" r="2.5" fill="white" />
    </svg>
  );
}

export function BookIcon({ className = "h-4 w-4 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13z"
        fill="currentColor"
      />
      <path
        d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13z"
        fill="currentColor"
        fillOpacity="0.6"
      />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M15 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4V12H9v3h2v6h3v-6h2.2l.8-3H14v-2.2c0-.7.3-1.3 1-1.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="9" width="3" height="11" fill="currentColor" />
      <circle cx="5.5" cy="5.5" r="1.8" fill="currentColor" />
      <path
        d="M11 9h3v1.7c.6-1 1.7-1.9 3.4-1.9 3 0 3.6 2 3.6 4.6V20h-3v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.6-2.3 3.1V20h-3V9z"
        fill="currentColor"
      />
    </svg>
  );
}

export function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 4l7 8.4L4.4 20H6l6-6.8 4.5 6.8H20l-7.3-8.7L19.6 4H18l-5.6 6.3L8 4H4z"
        fill="currentColor"
      />
    </svg>
  );
}

export const dotPattern = {
  backgroundImage: "radial-gradient(currentColor 1.4px, transparent 1.4px)",
  backgroundSize: "9px 9px",
};
