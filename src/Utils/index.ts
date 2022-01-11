export function updateArray<T>(array: T[], index: number, new_value: T) {
  return array.map((elem, i) => {
    if (i === index) {
      return new_value;
    }
    return elem;
  });
}