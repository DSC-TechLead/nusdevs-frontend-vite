import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine, process, and resolve class names.
 * This function leverages `clsx` to handle conditional and dynamic class names,
 * and `tailwind-merge` to resolve Tailwind CSS class conflicts.
 *
 * @param {...ClassValue[]} inputs - An array of inputs defining the class names.
 *                                   Accepts strings, arrays, objects, and conditional values.
 * @returns {string} - A single string of merged class names with Tailwind conflicts resolved.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
