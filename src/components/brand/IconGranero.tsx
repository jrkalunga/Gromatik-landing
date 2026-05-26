type Props = {
  className?: string;
};

export default function IconGranero({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 28 L 32 10 L 56 28" />
      <path d="M12 28 L 12 54 L 52 54 L 52 28" />
      <line x1="6" y1="54" x2="58" y2="54" />
      <rect x="28" y="16" width="8" height="8" />
      <path d="M18 46 L 26 38 L 32 42 L 44 30" />
      <path d="M38 30 L 44 30 L 44 36" />
      <line x1="16" y1="40" x2="16" y2="54" />
      <line x1="48" y1="40" x2="48" y2="54" />
    </svg>
  );
}
