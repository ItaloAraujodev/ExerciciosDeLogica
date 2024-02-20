function isValidWalk(walk) {
  const count = {};

  for (const char of walk) {
    count[char] = (count[char] || 0) + 1;
  }
  if (walk.length === 10 && count["n"] === count["s"] && count["e"] === count["w"]) {
    console.log(count);
    return true;
  }

  return false;
}