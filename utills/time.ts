export async function wait(n: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), n);
  });
}
