export default (second = 1500) => {
  return new Promise((resolve) => setTimeout(resolve, second));
}