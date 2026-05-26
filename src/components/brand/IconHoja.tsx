type Props = {
  className?: string;
};

export default function IconHoja({ className }: Props) {
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
      <path d="M50 10 C 36 10, 22 18, 16 32 C 12 42, 18 52, 28 52 C 42 52, 54 38, 56 22 C 56 14, 54 10, 50 10 Z" />
      <path d="M50 14 L 22 48" />
      <path d="M38 24 L 32 22" />
      <path d="M32 32 L 26 30" />
      <path d="M26 40 L 20 38" />
    </svg>
  );
}
