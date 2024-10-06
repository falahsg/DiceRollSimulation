function diceRollSimulation(percobaan) {
  let results = new Array(20).fill(0);

  for (let i = 0; i < percobaan; i++) {
    let roll = Math.floor(Math.random() * 20) + 1;
    results[roll - 1]++;
  }

  for (let i = 0; i < results.length; i++) {
    console.log(`Sisi ${i + 1}: ${results[i]}/${percobaan}`);
    console.log(
      `Probabilitas Sisi ${i + 1}: ${(results[i] / percobaan).toFixed(6)}`
    );
  }
}

diceRollSimulation(1000000);
