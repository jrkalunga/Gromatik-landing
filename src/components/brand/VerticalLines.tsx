type Props = {
  className?: string;
  count?: number;
  opacity?: number;
};

export default function VerticalLines({
  className,
  count = 12,
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
      {lines.map((i) => {
        const x = i * step + step / 2;
        const center = count / 2 - 0.5;
        const distance = Math.abs(i - center);
        const heightFactor = 1 - (distance / center) * 0.55;
        const y1 = 40 - 40 * heightFactor;
        return (
          <line
            key={i}
            x1={x}
            x2={x}
            y1={y1}
            y2={40}
            stroke="currentColor"
            strokeWidth={1.1}
            strokeLinecap="square"
          />
        );
      })}
    </svg>
  );
}
