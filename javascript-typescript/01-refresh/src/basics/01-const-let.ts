/* NUNCA usar var, si cambia usar LET si es constante usar CONST */
let firstName = "María Eugenia";
const LAST_NAME = "Costa";
const containsLetterC = LAST_NAME.includes("C");
let sayNumber = 5;

console.log(firstName, LAST_NAME, `contains letter C: ${containsLetterC}`, {sayNumber});
