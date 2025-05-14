import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
type Region = "brazil" | "europe" | "usa"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const localeToRegionMap: Record<string, Region> = {
  "pt-BR": "brazil",
  pt: "brazil",
  "en-US": "usa",
  en: "usa",
  de: "europe",
  fr: "europe",
  es: "europe",
  it: "europe",
}
/* eslint-disable  @typescript-eslint/no-explicit-any */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): {
  (...args: Parameters<T>): void
  cancel: () => void
} {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debounced = (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return debounced
}