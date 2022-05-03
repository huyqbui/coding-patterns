/*

Two players are playing a card game where the deck of cards are layed out in a straight line 
and each card value is visible to both the players.
The value of each card can range from a reasonable [-ve to +ve] number and the length of deck in n.

The rules of the game are such:

Player 1 starts the game
Each player has 3 option:
(Option 1: Pick 1st card)
(Option 2: Pick 1st two cards)
(Option 3: Pick 1st three cards)
You're only allowed to pick cards from the left side of the deck
Both players have to play optimally.
Return the maximum sum of cards Player 1 can obtain by playing optimally.

Example 1:
  Input: cards = [1, 2, -3, 8]
  Output: 3
  Explanation:
  Turn 1: Player 1 picks the first 2 cards: 1 + 2 = 3 points
  Turn 2: Player 2 gets the rest of the deck: -3 + 8 = 5 points

Example 2:
  Input: cards = [1, 1, 1, 1, 100]
  Output: 101
  Explanation:
  Turn 1: Player 1 picks cards[0] = 1 point
  Turn 2: Player 2 picks cards[1] + cards[2] + cards[3] = 3 points
  Turn 3: Player 1 picks cards[4] = 100 points

*/

const cardGame = (cards: number[]) => {
  if (!cards.length) return 0;
  let sum = 0;
  let len = cards.length;
  let arr = Array(len + 3).fill(0);
  for (let i = len - 1; i >= 0; i--) {
    sum += cards[i]
    let min = Infinity;
    for (let j = 1; j<= 3; j++) {
      //      2   1
      if (arr[i + j] < min)
      min = arr[i + j]
    }
    arr[i] = sum - min;
  }
  return arr[0]
}

const stoneGame = (stones: number[]) => {
  if (!stones.length) return 0;
  let sum = 0;
  let len = stones.length - 1;
  let bestMoves = Array(len + 3).fill(0);

  bestMoves[0] = stones[len]

  for (let i = len; i >= 0; i--) {
    let turn = stones[i]
    console.log(turn)
    
    for (let j = 1; j <= 3; j++) {
      let option = turn - bestMoves[(i + j) % 3]
      let best = Math.max(bestMoves[i], option)
      bestMoves[i % 3] = best
      turn += stones[i + j] || 0
      console.log(bestMoves)
    }
  }

  if (bestMoves[0] === 0) return 'Tie'
  return (bestMoves[0] > 0) ? 'Alice' : 'Bob'
}
//                           
// console.log(cardGame([1, 2, -3, 8])) //-> 3
console.log(stoneGame([1, 2, 3, 6])) //-> 'Bob wins'
// console.log(cardGame([1, 1, 1, 1, 100])) //-> 101
