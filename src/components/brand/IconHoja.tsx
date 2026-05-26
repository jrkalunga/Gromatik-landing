type Props = {
  className?: string;
};

export default function IconHoja({ className }: Props) {
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
      <path d="M54 10 C 38 10, 22 18, 16 32 C 12 44, 18 54, 28 54 C 42 54, 54 42, 56 24 C 56 16, 56 12, 54 10 Z" />
      <path d="M28 54 C 34 44, 44 30, 54 14" />
    </svg>
  );
}
