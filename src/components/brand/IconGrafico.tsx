type Props = {
  className?: string;
};

export default function IconGrafico({ className }: Props) {
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
      <path d="M10 10 L 10 54 L 54 54" />
      <rect x="18" y="40" width="6" height="10" />
      <rect x="28" y="32" width="6" height="18" />
      <rect x="38" y="22" width="6" height="28" />
      <path d="M16 30 L 26 22 L 36 26 L 50 12" />
      <path d="M44 12 L 50 12 L 50 18" />
    </svg>
  );
}
