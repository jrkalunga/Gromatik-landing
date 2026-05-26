type Props = {
  className?: string;
};

export default function BigChevron({ className }: Props) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6 L 60 54 L 114 6" />
    </svg>
  );
}
