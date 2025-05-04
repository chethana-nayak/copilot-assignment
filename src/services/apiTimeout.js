export function apiTimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout complete");
    }, 500);
  });
}
