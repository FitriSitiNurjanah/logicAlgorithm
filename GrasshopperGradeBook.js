function getGrade(s1, s2, s3) {
  var nilai = (s1 + s2 + s3) / 3;
  if (90 <= nilai && nilai <= 100) {
    return "A";
  } else if (80 <= nilai && nilai < 90) {
    return "B";
  } else if (70 <= nilai && nilai < 80) {
    return "C";
  } else if (60 <= nilai && nilai < 70) {
    return "D";
  } else if (0 <= nilai && nilai < 60) {
    return "F";
  }
}
