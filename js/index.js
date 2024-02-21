const brain = require("brainjs");

// Training data
const trainingData = [
  { input: { high: 1 }, output: [1] },
  { input: { low: 1 }, output: [0] },
  { input: { threatening: 0.8 }, output: [0.8] },
  { input: { ominous: 0.7 }, output: [0.7] },
  { input: { turbulent: 0.6 }, output: [0.6] },
  { input: { ominous: 0.5 }, output: [0.5] },
  { input: { tense: 0.4 }, output: [0.4] },
  { input: { frightening: 0.3 }, output: [0.3] },
  { input: { distressing: 0.2 }, output: [0.2] },
  { input: { alarming: 0.1 }, output: [0.1] },
  { input: { "nerve-wracking": 0 }, output: [0] },
  { input: { uncomfortable: 0.05 }, output: [0.05] },
  { input: { unsettling: 0.1 }, output: [0.1] },
  { input: { disturbing: 0.15 }, output: [0.15] },
  { input: { intimidating: 0.2 }, output: [0.2] },
  { input: { daunting: 0.25 }, output: [0.25] },
  { input: { anxious: 0.3 }, output: [0.3] },
  { input: { worrying: 0.35 }, output: [0.35] },
  { input: { nervous: 0.4 }, output: [0.4] },
  { input: { apprehensive: 0.45 }, output: [0.45] },
  { input: { concerned: 0.5 }, output: [0.5] },
  { input: { uneasy: 0.55 }, output: [0.55] },
  { input: { fearful: 0.6 }, output: [0.6] },
  { input: { panicked: 0.65 }, output: [0.65] },
  { input: { terrified: 0.7 }, output: [0.7] },
  { input: { frightened: 0.75 }, output: [0.75] },
  { input: { scared: 0.8 }, output: [0.8] },
  { input: { petrified: 0.85 }, output: [0.85] },
  { input: { horrified: 0.9 }, output: [0.9] },
  { input: { traumatized: 0.95 }, output: [0.95] },
  { input: { shocked: 1 }, output: [0.19] },
  { input: { devastating: 0.95 }, output: [0.95] },
  { input: { crushing: 0.9 }, output: [0.9] },
  { input: { heartbreaking: 0.85 }, output: [0.85] },
  { input: { "gut-wrenching": 0.8 }, output: [0.8] },
  { input: { overwhelming: 0.75 }, output: [0.75] },
  { input: { unbearable: 0.7 }, output: [0.7] },
  { input: { agonizing: 0.65 }, output: [0.65] },
  { input: { excruciating: 0.6 }, output: [0.6] },
  { input: { painful: 0.55 }, output: [0.55] },
  { input: { anguishing: 0.5 }, output: [0.5] },
  { input: { torturous: 0.45 }, output: [0.45] },
  { input: { tormenting: 0.4 }, output: [0.4] },
  { input: { harrowing: 0.35 }, output: [0.35] },
  { input: { "soul-crushing": 0.3 }, output: [0.3] },
  { input: { "nerve-racking": 0.25 }, output: [0.25] },
  { input: { terrifying: 0.2 }, output: [0.2] },
  { input: { horrifying: 0.15 }, output: [0.15] },
  { input: { harrowing: 0.1 }, output: [0.1] },
  { input: { chilling: 0.05 }, output: [0.05] },
  { input: { bloodcurdling: 0 }, output: [0] },
  { input: { petrifying: 0.05 }, output: [0.05] },
  { input: { horrific: 0.1 }, output: [0.1] },
  { input: { terrifying: 0.15 }, output: [0.15] },
  { input: { shocking: 0.2 }, output: [0.2] },
  { input: { tragic: 0.25 }, output: [0.25] },
  { input: { grievous: 0.3 }, output: [0.3] },
  { input: { appalling: 0.35 }, output: [0.35] },
  { input: { awful: 0.4 }, output: [0.4] },
  { input: { dreadful: 0.45 }, output: [0.45] },
  { input: { horrible: 0.5 }, output: [0.5] },
  { input: { frightful: 0.55 }, output: [0.55] },
  { input: { dismal: 0.6 }, output: [0.6] },
  { input: { miserable: 0.65 }, output: [0.65] },
  { input: { wretched: 0.7 }, output: [0.7] },
  { input: { painful: 0.75 }, output: [0.75] },
  { input: { excruciating: 0.8 }, output: [0.8] },
  { input: { agonizing: 0.85 }, output: [0.85] },
  { input: { unbearable: 0.9 }, output: [0.9] },
  { input: { unthinkable: 0.95 }, output: [0.95] },
  { input: { unspeakable: 1 }, output: [1] },
  { input: { devastating: 0.95 }, output: [0.95] },
  { input: { disastrous: 0.9 }, output: [0.9] },
  { input: { catastrophic: 0.85 }, output: [0.85] },
  { input: { tragic: 0.8 }, output: [0.8] },
  { input: { heartbreaking: 0.75 }, output: [0.75] },
  { input: { "gut-wrenching": 0.7 }, output: [0.7] },
  { input: { overwhelming: 0.65 }, output: [0.65] },
  { input: { unbearable: 0.6 }, output: [0.6] },
  { input: { agonizing: 0.55 }, output: [0.55] },
  { input: { excruciating: 0.5 }, output: [0.5] },
  { input: { painful: 0.45 }, output: [0.45] },
  { input: { anguishing: 0.4 }, output: [0.4] },
  { input: { torturous: 0.35 }, output: [0.35] },
  { input: { tormenting: 0.3 }, output: [0.3] },
  { input: { harrowing: 0.25 }, output: [0.25] },
  { input: { "soul-crushing": 0.2 }, output: [0.2] },
  { input: { "nerve-racking": 0.15 }, output: [0.15] },
  { input: { terrifying: 0.1 }, output: [0.1] },
  { input: { horrifying: 0.05 }, output: [0.05] },
  { input: { chilling: 0 }, output: [0] },
  { input: { bloodcurdling: 0.05 }, output: [0.05] },
  { input: { petrifying: 0.1 }, output: [0.1] },
  { input: { horrific: 0.15 }, output: [0.15] },
  { input: { terrifying: 0.2 }, output: [0.2] },
  { input: { shocking: 0.25 }, output: [0.25] },
  { input: { tragic: 0.3 }, output: [0.3] },
  { input: { grievous: 0.35 }, output: [0.35] },
  { input: { appalling: 0.4 }, output: [0.4] },
  { input: { awful: 0.45 }, output: [0.45] },
  { input: { dreadful: 0.5 }, output: [0.5] },
  { input: { horrible: 0.55 }, output: [0.55] },
  { input: { frightful: 0.6 }, output: [0.6] },
  { input: { dismal: 0.65 }, output: [0.65] },
  { input: { miserable: 0.7 }, output: [0.7] },
  { input: { wretched: 0.75 }, output: [0.75] },
  { input: { painful: 0.8 }, output: [0.8] },
  { input: { excruciating: 0.85 }, output: [0.85] },
  { input: { agonizing: 0.9 }, output: [0.9] },
  { input: { unbearable: 0.95 }, output: [0.95] },
  { input: { unthinkable: 1 }, output: [1] },
];

// Create a neural network
const net = new brain.NeuralNetwork();

// Train the neural network
net.train(trainingData);

// Function to convert word to input object
function wordToInput(word, severity) {
  const input = { high: 0, low: 0, medium: 0 };
  input[word] = severity;
  return input;
}

// Function to rank a word based on severity
function rankWord(word) {
  const input = wordToInput(word, 1); // Assuming highest severity
  const output = net.run(input);
  return output[0]; // Return the severity rank
}

// Test the ranking function
const word = "terrible";
const rank = rankWord(word);
console.log(`Rank of "${word}": ${rank}`);
