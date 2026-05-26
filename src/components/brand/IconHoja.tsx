type Props = {
  className?: string;
};

export default function IconHoja({ className }: Props) {
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
      <path d="M52 10 C 42 10, 26 14, 18 24 C 10 34, 10 46, 14 52 C 20 56, 32 56, 42 48 C 52 40, 56 24, 56 14 L 52 10 Z" />
      <path d="M14 52 C 24 42, 36 30, 52 14" />
      <path d="M22 38 L 32 38" />
      <path d="M28 30 L 38 30" />
      <path d="M34 22 L 44 22" />
    </svg>
  );
}
