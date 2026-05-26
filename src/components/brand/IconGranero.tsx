type Props = {
  className?: string;
};

export default function IconGranero({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 26 L 32 10 L 56 26" />
      <path d="M12 26 L 12 54 L 52 54 L 52 26" />
      <path d="M12 54 L 52 54" />
      <rect x="38" y="20" width="8" height="6" />
      <path d="M24 54 L 24 38 L 40 38 L 40 54" />
      <path d="M24 46 L 40 46" />
      <path d="M32 38 L 32 54" />
    </svg>
  );
}
