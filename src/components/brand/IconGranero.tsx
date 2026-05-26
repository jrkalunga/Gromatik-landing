type Props = {
  className?: string;
};

export default function IconGranero({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 30 L 32 8 L 56 30" />
      <path d="M14 30 L 14 56 L 50 56 L 50 30" />
      <path d="M14 56 L 50 56" />
      <line x1="20" y1="34" x2="20" y2="56" />
      <line x1="26" y1="34" x2="26" y2="56" />
      <line x1="38" y1="34" x2="38" y2="56" />
      <line x1="44" y1="34" x2="44" y2="56" />
      <path d="M28 56 L 28 42 L 36 42 L 36 56" />
    </svg>
  );
}
