import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5">
      <p className="text-sm tracking-[0.16em] text-muted uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you requested does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 w-fit items-center rounded-md bg-ink px-4 text-sm font-medium text-white"
      >
        Back to home
      </Link>
    </main>
  );
}
