import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function obsCn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { obsCn as cn };
