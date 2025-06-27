export interface GreetingOptions {
  name?: string;
  formal?: boolean;
}

export function greet(options: GreetingOptions = {}): string {
  const { name = 'World', formal = false } = options;
  const prefix = formal ? 'Hello' : 'Hi';
  return `${prefix}, ${name}!`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export default {
  greet,
  add,
};

