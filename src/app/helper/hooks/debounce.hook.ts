export const debounceHandler = (
  fn: (...props: any) => void,
  delay: number = 500,
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return (...args: any) => {
    clearTimeout(timeoutId!);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
