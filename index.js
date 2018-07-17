var katzDeli = [];
var otherDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name); 
  return `Welcome ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli, name) {
  if (katzDeli = []) {
  return `Currently serving ${katzDeli[0]}.`
  katzDeli.shift();
  }
  else {
  return "There is nobody waiting to be served!"}
}

function currentLine(katzDeli, name) {
  if (katzDelireturn != []) {
  return `The line is currently: 1. ${katzDeliLine[0]} 2. ${katzDeliLine[1]} 3. ${katzDeliLine[2]}.`}
  else {
  return "The line is currently empty."}
}