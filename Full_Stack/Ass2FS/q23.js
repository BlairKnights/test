function* allCards() {
    const suits = ["♠", "♥", "♦", "♣"]; 
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; 
  
    for (const suit of suits) {
        for (const rank of ranks) {
            yield { suit, rank }; 
      }
    }
}
  

for (const card of allCards()) {
    console.log("\t"+card.suit + card.rank);
}
  