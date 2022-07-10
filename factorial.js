function factorial(n) {
  if (n == 0) {
    return 1;
  } else if (n < 0 || n > 12) {
    throw new RangeError();
  } else {
    hasil = n * factorial(n - 1);
    return hasil;
  }
}
