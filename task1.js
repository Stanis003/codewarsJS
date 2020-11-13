/*Complete the function to return his total number of goals in all three leagues.
Note: the input will always be valid.**/
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals+copaDelReyGoals+championsLeagueGoals;
}
/*Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.**/
function move (position, roll) {
  return roll*2+position;
}
/*Create a function that gives a personalized greeting. This function takes two parameters: name and owner.**/
function greet (name, owner) {
return (name===owner)?'Hello boss':'Hello guest';
}
/*You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.**/
function litres(time) {
 return parseInt(time*0.5);
}
Be Concise I - The Ternary Operator
function describeAge(a){return"You're a(n) "+(a<13?'kid':a<18?'teenager':a<65?'adult':'elderly');}

