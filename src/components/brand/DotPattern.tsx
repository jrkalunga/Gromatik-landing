type Props = {
  className?: string;
  opacity?: number;
};

export default function DotPattern({ className, opacity = 1 }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="gromatik-dots"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="5" cy="5" r="1.4" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#gromatik-dots)" />
    </svg>
  );
}
