const arr =
[
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 10, 12, 11 ]
];
// You should implement your task here.
console.log(
  arr.reduce((acc, cur, i) => {
    cur.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => acc.push(e));
    return acc;
  }, [])
);
module.exports = function towelSort (matrix) {
  return [];
}
