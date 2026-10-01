export function withBase(path: string): string {
  const cleanPath = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${cleanPath}`;
}
