function sumCubes(n) {
  let hasil = 0;
  for (i = 1; i <= n; i++) {
    hasil += Math.pow(i, 3);
  }
  return hasil;
}
