var katzDeli = [];
var otherDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name); 
  return `Welcome ${name}, you are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine, name) {
  return `Currently serving ${name}.`
  or "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine, name) {
  return "The line is currently: 1. katzDeliLine[0] 2. katzDeliLine[1] 3. katzDeliLine[2].";
  or "The line is currently empty."
}