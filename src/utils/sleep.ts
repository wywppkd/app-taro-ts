export default (second = 1500): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, second));
}