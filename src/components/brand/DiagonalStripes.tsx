type Props = {
  className?: string;
  opacity?: number;
};

export default function DiagonalStripes({ className, opacity = 1 }: Props) {
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
          id="gromatik-diagonal"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="14"
            stroke="currentColor"
            strokeWidth="2.4"
          />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#gromatik-diagonal)" />
    </svg>
  );
}
