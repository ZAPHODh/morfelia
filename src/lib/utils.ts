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