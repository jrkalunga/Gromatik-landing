type Props = {
  className?: string;
  size?: number;
  dot?: number;
  opacity?: number;
};

export default function DotPattern({
  className,
  size = 22,
  dot = 1.1,
  opacity = 0.18,
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        opacity,
        backgroundImage: `radial-gradient(currentColor ${dot}px, transparent ${dot}px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
