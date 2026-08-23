

export const BREAKPOINTS = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export function isWideScreen(current: number): boolean {
	return current >= BREAKPOINTS.md;
}

