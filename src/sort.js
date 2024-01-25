export default function sortMatchers(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}
