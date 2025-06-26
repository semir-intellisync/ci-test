/**
 * Main entry point for the package
 */

export interface GreetingOptions {
  name?: string;
  formal?: boolean;
}

/**
 * Creates a greeting message
 * @param options - Options for the greeting
 * @returns A greeting string
 */
export function greet(options: GreetingOptions = {}): string {
  const { name = 'World', formal = false } = options;
  const prefix = formal ? 'Hello' : 'Hi';
  return `${prefix}, ${name}!`;
}

/**
 * Calculates the sum of two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Default export
 */
export default {
  greet,
  add,
};

