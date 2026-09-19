/** Joins class names, skipping falsy values. Enough for this project: no need for a dependency. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}
