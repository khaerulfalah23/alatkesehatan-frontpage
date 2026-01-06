export function truncateHtml(html: string, maxWords: number): string {
  const text = html.replace(/<[^>]*>/g, '').trim();
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}
