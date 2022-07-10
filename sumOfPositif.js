function positiveSum(arr) {
  var nilai = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      nilai += arr[i];
    }
  }
  return nilai;
}
