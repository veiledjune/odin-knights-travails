function knightMoves(start, end) {
  const startX = start[0],
    startY = start[1];

  if (startX === end[0] && startY === end[1])
    return `You made it in 0 moves! Here's your path: ${start}`;

  const queue = [[start, [start]]];

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    if (current[0] === end[0] && current[1] === end[1]) {
      let msg = `You made it in ${path.length - 1} moves! Here's your path:`;
      path.forEach((move) => (msg += `[${move}]`));
      return msg;
    }
    const nextMoves = getMoves(current, path);
    nextMoves.forEach((move) => queue.push([move, [...path, move]]));
  }
  console.log(queue);
}

function getMoves(move, path) {
  const startX = move[0],
    startY = move[1];
  const calculateMove = [
    [-1, 2],
    [-2, 1],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ];

  const possibleMoves = [];

  calculateMove.forEach((move) => {
    if (
      startX + move[0] >= 0 &&
      startX + move[0] <= 7 &&
      startY + move[1] >= 0 &&
      startY + move[1] <= 7
    )
      possibleMoves.push([startX + move[0], startY + move[1]]);
  });

  const availableMoves = possibleMoves.filter(
    (move) => !path.some((prev) => prev[0] === move[0] && prev[1] === move[1]),
  );

  return availableMoves;
}

console.log(knightMoves([3, 3], [0, 5]));
console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([0, 0], [7, 7]));
console.log(knightMoves([3, 3], [4, 3]));
