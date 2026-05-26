type Props = {
  className?: string;
};

export default function ChevronAccent({ className }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 12"
      className={className}
      fill="none"
    >
      <path
        d="M2 2 L12 10 L22 2"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
