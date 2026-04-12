export const toggle = (arr: string[], value: string) =>
  arr.includes(value) ? arr.filter((i) => i !== value) : [...arr, value];
