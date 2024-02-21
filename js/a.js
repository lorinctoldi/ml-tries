const brain = require('brainjs');

// Define your training data
const trainingData = [
    { input: "OS versions are out of date", output: 0.8 },
    { input: "The situation is alarming", output: 0.9 },
    // Add more labeled sentences with severity scores
];

// Create a neural network
const net = new brain.NeuralNetwork();

// Train the neural network
net.train(trainingData);

console.log(net.run("OS versions are out of date"))