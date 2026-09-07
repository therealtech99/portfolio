export function PageFrame() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 flex justify-center"
      aria-hidden="true"
    >
      <div className="relative h-full w-full max-w-6xl px-5 sm:px-8">
        <div className="absolute inset-y-0 left-5 w-px bg-line/70 sm:left-8" />
        <div className="absolute inset-y-0 right-5 w-px bg-line/70 sm:right-8" />
      </div>
    </div>
  );
}
