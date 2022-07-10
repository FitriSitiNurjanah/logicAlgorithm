function combat(health, damage) {
  var nilai = health - damage;
  if (nilai >= 0) {
    return nilai;
  } else {
    return 0;
  }
}
