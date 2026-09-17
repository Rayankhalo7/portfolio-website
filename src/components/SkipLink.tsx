export function SkipLink() {
  return (
    <a
      href="#main"
      className="absolute left-4 top-4 z-50 -translate-y-16 bg-accent px-4 py-2 text-sm font-semibold text-white opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline-none dark:text-[#0E141C]"
      style={{ borderRadius: 4 }}
    >
      Zum Inhalt springen
    </a>
  );
}
