type Props = {
  className?: string;
  count?: number;
  opacity?: number;
};

export default function VerticalLines({
  className,
  count = 20,
  opacity = 0.18,
}: Props) {
  const lines = Array.from({ length: count }, (_, i) => i);
  const step = 100 / count;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      className={className}
      style={{ opacity }}
    >
      {lines.map((i) => (
        <line
          key={i}
          x1={i * step + step / 2}
          x2={i * step + step / 2}
          y1={0}
          y2={40}
          stroke="currentColor"
          strokeWidth={0.6}
          strokeLinecap="square"
        />
      ))}
    </svg>
  );
}
