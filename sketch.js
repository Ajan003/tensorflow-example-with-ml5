// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Image classification using MobileNet and p5.js
This example uses a callback pattern to create the classifier
=== */

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
console.log('ml5 version is:', ml5.version)
let classifier;

// A variable to hold the image we want to classify
let img;

function preload() {
    createDiv('Loaded Image: ');
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('https://i.insider.com/5cbf50dfd1a2f8074406a8b2?width=2018');
}

function setup() {
  createCanvas(1200, 800);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  createDiv('Predicted Objects: ' + results[0].label);
  createDiv('Confidence of prediction: ' + nf(results[0].confidence, 0, 2));
}