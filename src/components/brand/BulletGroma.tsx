type Props = {
  className?: string;
};

export default function BulletGroma({ className }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-end gap-[2px] h-4 shrink-0 ${className ?? ""}`}
    >
      <span className="block w-[2px] h-2 bg-current rounded-sm" />
      <span className="block w-[2px] h-4 bg-current rounded-sm" />
      <span className="block w-[2px] h-2 bg-current rounded-sm" />
    </span>
  );
}
