/* NUNCA usar var, si cambia usar LET si es constante usar CONST */
let firstName: string = "María Eugenia";
const LAST_NAME: string = "Costa";
const containsLetterC: boolean = LAST_NAME.includes("C");
let sayNumber: number = 5;
sayNumber = 3;

console.log(firstName, LAST_NAME, `contains letter C: ${containsLetterC}`, {sayNumber});
