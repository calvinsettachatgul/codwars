// 5 kyu
// Double Cola

// 621389AlexIsHappydiscuss
// VIM
// EMACS
// Instructions
// Output
// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

// For example, Penny drinks the third can of cola and the queue will look like this:

// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of a man who will drink the n-th cola.

// Note that in the very beginning the queue looks like that:

// Sheldon, Leonard, Penny, Rajesh, Howard
// Input

// The input data consist of an array which contains five names, and single integer n.

// (1 ≤ n ≤ 1000000000).
// Output / Examples

// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1. Please note that you should spell the names like this: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" (without the quotes). In that order precisely the friends are in the queue initially.

// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)=="Sheldon"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)=="Penny"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)=="Leonard"
// AlgorithmsMathematicsNumbers
// JavaScript runs on Node v0.10.21. All code is ran through BabelJS (ES 2015 supported)

function whoIsNext(names, r){
 //your code here
  var multFactor = 2;
  var colaCount = 0;
  var machineQueue = names;

  while(colaCount <= r){

  var tempDrinker = machineQueue.shift()
  // console.log("tempDrinker is");
  // console.log(tempDrinker);
      colaCount++;
    for(var i = 0; i < multFactor ; i++){
      // console.log("queueing")
      // console.log(tempDrinker + " is pushed");
      machineQueue.push(tempDrinker);
      if(colaCount === r){
        // console.log("colaCount reached")
        return tempDrinker;
      }
    }



  }
  //console.log(machineQueue);


}


console.log(whoIsNext(["calvin", "patson", "mom", "dad"], 3));