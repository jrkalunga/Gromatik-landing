type Props = {
  className?: string;
};

export default function IconGrafico({ className }: Props) {
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
      <path d="M8 10 L 8 54 L 56 54" />
      <line x1="20" y1="46" x2="20" y2="54" />
      <line x1="28" y1="40" x2="28" y2="54" />
      <line x1="36" y1="32" x2="36" y2="54" />
      <line x1="44" y1="24" x2="44" y2="54" />
      <path d="M14 38 L 24 30 L 34 24 L 50 12" />
      <path d="M42 12 L 50 12 L 50 20" />
    </svg>
  );
}
